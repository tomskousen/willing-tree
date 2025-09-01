import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  query, 
  where, 
  orderBy,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  addDoc,
  onSnapshot,
  Unsubscribe
} from 'firebase/firestore';
import { db } from '../config/firebase';

// Import types properly
export interface Innermost {
  id: string;
  partnerA: string;
  partnerB: string;
  partnerAEmail: string;
  partnerBEmail: string;
  status: 'pending' | 'active' | 'paused';
  pairingCode?: string;
  inviteMessage?: string;
  createdAt: any;
}

export interface Wish {
  id: string;
  text: string;
  category: string;
  isMostWanted: boolean;
  createdAt: Date;
}

export interface WillingItem {
  wishId: string;
  priority: number;
  effortLevel?: 'easy' | 'moderate' | 'challenging';
}

export interface WillingBox {
  id: string;
  innermostId: string;
  partnerA: string;
  partnerB: string;
  partnerAWishList: Wish[];
  partnerBWishList: Wish[];
  partnerAWillingList: WillingItem[];
  partnerBWillingList: WillingItem[];
  weekNumber: number;
  status: 'planting_trees' | 'selecting_willing' | 'guessing' | 'revealed';
  isLocked: boolean;
  createdAt?: any;
  lockedAt?: any;
}

class DataService {
  // Create a new Innermost (partnership)
  async createInnermost(userId: string, partnerEmail: string, userName: string): Promise<Innermost> {
    try {
      // Generate a unique pairing code
      const pairingCode = this.generatePairingCode();
      
      const innermost: Omit<Innermost, 'id'> = {
        partnerA: userId,
        partnerB: '', // Will be filled when partner accepts
        partnerAEmail: userName,
        partnerBEmail: partnerEmail,
        status: 'pending',
        pairingCode,
        createdAt: serverTimestamp() as any
      };

      const docRef = await addDoc(collection(db, 'innermosts'), innermost);
      
      // Update user's activeInnermosts
      await updateDoc(doc(db, 'users', userId), {
        activeInnermosts: arrayUnion(docRef.id)
      });

      return { ...innermost, id: docRef.id } as Innermost;
    } catch (error: any) {
      throw new Error(`Failed to create Innermost: ${error.message}`);
    }
  }

  // Accept an Innermost invitation
  async acceptInnermost(pairingCode: string, userId: string): Promise<Innermost> {
    try {
      // Find the innermost with this pairing code
      const q = query(
        collection(db, 'innermosts'),
        where('pairingCode', '==', pairingCode),
        where('status', '==', 'pending')
      );
      
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        throw new Error('Invalid or expired pairing code');
      }

      const innermostDoc = snapshot.docs[0];
      const innermostData = innermostDoc.data();

      // Update the innermost to add partner B and activate
      await updateDoc(doc(db, 'innermosts', innermostDoc.id), {
        partnerB: userId,
        status: 'active',
        pairingCode: null // Remove code after successful pairing
      });

      // Update partner B's activeInnermosts
      await updateDoc(doc(db, 'users', userId), {
        activeInnermosts: arrayUnion(innermostDoc.id)
      });

      // Create initial WillingBox for this innermost
      await this.createWillingBox(innermostDoc.id, innermostData.partnerA, userId);

      return { ...innermostData, id: innermostDoc.id, partnerB: userId, status: 'active' } as Innermost;
    } catch (error: any) {
      throw new Error(`Failed to accept Innermost: ${error.message}`);
    }
  }

  // Get user's innermosts
  async getUserInnermosts(userId: string): Promise<Innermost[]> {
    try {
      const q = query(
        collection(db, 'innermosts'),
        where('partnerA', '==', userId)
      );
      const q2 = query(
        collection(db, 'innermosts'),
        where('partnerB', '==', userId)
      );

      const [snapshot1, snapshot2] = await Promise.all([getDocs(q), getDocs(q2)]);
      
      const innermosts: Innermost[] = [];
      snapshot1.forEach(doc => {
        innermosts.push({ id: doc.id, ...doc.data() } as Innermost);
      });
      snapshot2.forEach(doc => {
        innermosts.push({ id: doc.id, ...doc.data() } as Innermost);
      });

      return innermosts;
    } catch (error: any) {
      throw new Error(`Failed to get innermosts: ${error.message}`);
    }
  }

  // Create a new WillingBox for the week
  async createWillingBox(innermostId: string, partnerA: string, partnerB: string): Promise<WillingBox> {
    try {
      const willingBox: Omit<WillingBox, 'id'> = {
        innermostId,
        partnerA,
        partnerB,
        partnerAWishList: [],
        partnerBWishList: [],
        partnerAWillingList: [],
        partnerBWillingList: [],
        weekNumber: this.getCurrentWeekNumber(),
        status: 'planting_trees',
        isLocked: false,
        createdAt: serverTimestamp() as any
      };

      const docRef = await addDoc(collection(db, 'willingBoxes'), willingBox);
      return { ...willingBox, id: docRef.id } as WillingBox;
    } catch (error: any) {
      throw new Error(`Failed to create WillingBox: ${error.message}`);
    }
  }

  // Get current week's WillingBox for an innermost
  async getCurrentWillingBox(innermostId: string): Promise<WillingBox | null> {
    try {
      const weekNumber = this.getCurrentWeekNumber();
      const q = query(
        collection(db, 'willingBoxes'),
        where('innermostId', '==', innermostId),
        where('weekNumber', '==', weekNumber)
      );

      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        return null;
      }

      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() } as WillingBox;
    } catch (error: any) {
      console.error('Failed to get WillingBox:', error);
      return null;
    }
  }

  // Update WishList
  async updateWishList(willingBoxId: string, userId: string, wishes: Wish[], isPartnerA: boolean): Promise<void> {
    try {
      const updateData = isPartnerA 
        ? { partnerAWishList: wishes }
        : { partnerBWishList: wishes };

      await updateDoc(doc(db, 'willingBoxes', willingBoxId), updateData);

      // Check if both partners have completed their WishLists
      const willingBox = await getDoc(doc(db, 'willingBoxes', willingBoxId));
      const data = willingBox.data() as WillingBox;
      
      if (data.partnerAWishList.length === 12 && data.partnerBWishList.length === 12) {
        // Move to selecting phase
        await updateDoc(doc(db, 'willingBoxes', willingBoxId), {
          status: 'selecting_willing'
        });
      }
    } catch (error: any) {
      throw new Error(`Failed to update WishList: ${error.message}`);
    }
  }

  // Update WillingList (selections)
  async updateWillingList(willingBoxId: string, userId: string, selections: WillingItem[], isPartnerA: boolean): Promise<void> {
    try {
      const updateData = isPartnerA 
        ? { partnerAWillingList: selections }
        : { partnerBWillingList: selections };

      await updateDoc(doc(db, 'willingBoxes', willingBoxId), updateData);

      // Check if both partners have completed their selections
      const willingBox = await getDoc(doc(db, 'willingBoxes', willingBoxId));
      const data = willingBox.data() as WillingBox;
      
      if (data.partnerAWillingList.length === 3 && data.partnerBWillingList.length === 3) {
        // Move to guessing phase
        await updateDoc(doc(db, 'willingBoxes', willingBoxId), {
          status: 'guessing'
        });
      }
    } catch (error: any) {
      throw new Error(`Failed to update WillingList: ${error.message}`);
    }
  }

  // Subscribe to WillingBox changes (for real-time updates)
  subscribeToWillingBox(willingBoxId: string, callback: (willingBox: WillingBox) => void): Unsubscribe {
    return onSnapshot(doc(db, 'willingBoxes', willingBoxId), (doc) => {
      if (doc.exists()) {
        callback({ id: doc.id, ...doc.data() } as WillingBox);
      }
    });
  }

  // Subscribe to Innermost changes
  subscribeToInnermost(innermostId: string, callback: (innermost: Innermost) => void): Unsubscribe {
    return onSnapshot(doc(db, 'innermosts', innermostId), (doc) => {
      if (doc.exists()) {
        callback({ id: doc.id, ...doc.data() } as Innermost);
      }
    });
  }

  // Helper functions
  private generatePairingCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  private getCurrentWeekNumber(): number {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.floor(diff / oneWeek) + 1;
  }

  // Get all WillingBoxes for an innermost (history)
  async getInnermostHistory(innermostId: string): Promise<WillingBox[]> {
    try {
      const q = query(
        collection(db, 'willingBoxes'),
        where('innermostId', '==', innermostId),
        orderBy('weekNumber', 'desc')
      );

      const snapshot = await getDocs(q);
      const boxes: WillingBox[] = [];
      
      snapshot.forEach(doc => {
        boxes.push({ id: doc.id, ...doc.data() } as WillingBox);
      });

      return boxes;
    } catch (error: any) {
      throw new Error(`Failed to get history: ${error.message}`);
    }
  }
}

export const dataService = new DataService();