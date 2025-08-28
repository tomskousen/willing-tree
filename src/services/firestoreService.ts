import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  serverTimestamp,
  DocumentData 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { User, Innermost, WillingBox, WeeklyScore } from '../types';

/**
 * PRODUCTION FIRESTORE SERVICE
 * Real database operations - no mocks or placeholders
 */

export class FirestoreService {
  /**
   * Create or update user profile in Firestore
   */
  static async createUserProfile(
    userId: string, 
    userData: Omit<User, 'id' | 'createdAt'>
  ): Promise<User> {
    const userRef = doc(db, 'users', userId);
    
    const newUser: User = {
      id: userId,
      ...userData,
      createdAt: new Date(),
    };

    await setDoc(userRef, {
      ...newUser,
      createdAt: serverTimestamp()
    });

    return newUser;
  }

  /**
   * Get user profile from Firestore
   */
  static async getUserProfile(userId: string): Promise<User | null> {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const data = userSnap.data() as DocumentData;
      return {
        ...data,
        id: userSnap.id,
        createdAt: data.createdAt?.toDate() || new Date(),
        subscriptionEndDate: data.subscriptionEndDate?.toDate()
      } as User;
    }
    
    return null;
  }

  /**
   * Update user profile
   */
  static async updateUserProfile(
    userId: string, 
    updates: Partial<Omit<User, 'id' | 'createdAt'>>
  ): Promise<void> {
    const userRef = doc(db, 'users', userId);
    
    const updateData: any = { ...updates };
    if (updates.subscriptionEndDate) {
      updateData.subscriptionEndDate = updates.subscriptionEndDate;
    }
    
    await updateDoc(userRef, updateData);
  }

  /**
   * Get user's innermosts (relationships)
   */
  static async getUserInnermosts(userId: string): Promise<Innermost[]> {
    const innermostsRef = collection(db, 'innermosts');
    const q = query(
      innermostsRef, 
      where('partnerA', '==', userId)
    );
    const q2 = query(
      innermostsRef,
      where('partnerB', '==', userId)
    );

    const [snapA, snapB] = await Promise.all([
      getDocs(q),
      getDocs(q2)
    ]);

    const innermosts: Innermost[] = [];
    
    [...snapA.docs, ...snapB.docs].forEach(doc => {
      const data = doc.data() as DocumentData;
      innermosts.push({
        ...data,
        id: doc.id,
        createdAt: data.createdAt?.toDate() || new Date()
      } as Innermost);
    });

    return innermosts;
  }

  /**
   * Create new innermost (relationship pairing)
   */
  static async createInnermost(
    innermost: Omit<Innermost, 'id' | 'createdAt'>
  ): Promise<Innermost> {
    const innermostRef = doc(collection(db, 'innermosts'));
    
    const newInnermost: Innermost = {
      ...innermost,
      id: innermostRef.id,
      createdAt: new Date()
    };

    await setDoc(innermostRef, {
      ...newInnermost,
      createdAt: serverTimestamp()
    });

    return newInnermost;
  }

  /**
   * Get willing box for an innermost
   */
  static async getWillingBox(innermostId: string): Promise<WillingBox | null> {
    const willingBoxRef = doc(db, 'willingBoxes', innermostId);
    const snap = await getDoc(willingBoxRef);
    
    if (snap.exists()) {
      const data = snap.data() as DocumentData;
      return {
        ...data,
        id: snap.id,
        lockedAt: data.lockedAt?.toDate()
      } as WillingBox;
    }
    
    return null;
  }

  /**
   * Create or update willing box
   */
  static async saveWillingBox(willingBox: WillingBox): Promise<void> {
    const willingBoxRef = doc(db, 'willingBoxes', willingBox.id);
    
    const dataToSave = {
      ...willingBox,
      lockedAt: willingBox.lockedAt || null
    };
    
    await setDoc(willingBoxRef, dataToSave);
  }

  /**
   * Get weekly scores for an innermost
   */
  static async getWeeklyScores(innermostId: string): Promise<WeeklyScore[]> {
    const scoresRef = collection(db, 'weeklyScores');
    const q = query(scoresRef, where('innermostId', '==', innermostId));
    const snap = await getDocs(q);
    
    const scores: WeeklyScore[] = [];
    snap.docs.forEach(doc => {
      const data = doc.data() as DocumentData;
      scores.push({
        ...data,
        id: doc.id,
        completedAt: data.completedAt?.toDate()
      } as WeeklyScore);
    });
    
    return scores.sort((a, b) => a.weekNumber - b.weekNumber);
  }

  /**
   * Save weekly score
   */
  static async saveWeeklyScore(score: WeeklyScore): Promise<void> {
    const scoreRef = doc(db, 'weeklyScores', score.id);
    
    const dataToSave = {
      ...score,
      completedAt: score.completedAt || null
    };
    
    await setDoc(scoreRef, dataToSave);
  }

  /**
   * Update subscription status
   */
  static async updateSubscriptionStatus(
    userId: string,
    status: User['subscriptionStatus'],
    endDate?: Date
  ): Promise<void> {
    const userRef = doc(db, 'users', userId);
    
    const updates: any = {
      subscriptionStatus: status
    };
    
    if (endDate) {
      updates.subscriptionEndDate = endDate;
    }
    
    await updateDoc(userRef, updates);
  }

  /**
   * Check if email is already registered
   */
  static async isEmailRegistered(email: string): Promise<boolean> {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email.toLowerCase()));
    const snap = await getDocs(q);
    
    return !snap.empty;
  }
}