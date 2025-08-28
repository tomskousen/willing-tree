import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import type { User } from '../types';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from '../config/firebase';
import { FirestoreService } from '../services/firestoreService';

interface AuthState {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;
  
  // Actions
  setUser: (user: User | null) => void;
  setFirebaseUser: (user: FirebaseUser | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setInitialized: (initialized: boolean) => void;
  
  // Auth methods
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, displayName: string, age: number, gender: 'male' | 'female' | 'other') => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        firebaseUser: null,
        isLoading: false,
        isInitialized: false,
        error: null,

        setUser: (user) => set({ user }),
        setFirebaseUser: (firebaseUser) => set({ firebaseUser }),
        setLoading: (isLoading) => set({ isLoading }),
        setError: (error) => set({ error }),
        setInitialized: (isInitialized) => set({ isInitialized }),
        clearError: () => set({ error: null }),

        login: async (email: string, password: string) => {
          try {
            set({ isLoading: true, error: null });
            const credential = await signInWithEmailAndPassword(auth, email, password);
            // User will be set by the auth state listener
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Login failed';
            set({ error: message });
            throw error;
          } finally {
            set({ isLoading: false });
          }
        },

        signup: async (email: string, password: string, displayName: string, age: number, gender: 'male' | 'female' | 'other') => {
          try {
            set({ isLoading: true, error: null });
            const credential = await createUserWithEmailAndPassword(auth, email, password);
            
            // Update Firebase Auth profile
            await updateProfile(credential.user, {
              displayName: displayName
            });
            
            // Create user profile in Firestore
            const newUser = await FirestoreService.createUserProfile(
              credential.user.uid,
              {
                email: credential.user.email!,
                displayName,
                age,
                gender,
                activeInnermosts: [],
                subscriptionStatus: 'free'
              }
            );
            
            set({ user: newUser });
            
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Signup failed';
            set({ error: message });
            throw error;
          } finally {
            set({ isLoading: false });
          }
        },

        logout: async () => {
          try {
            set({ isLoading: true, error: null });
            await signOut(auth);
            set({ user: null, firebaseUser: null });
          } catch (error) {
            const message = error instanceof Error ? error.message : 'Logout failed';
            set({ error: message });
            throw error;
          } finally {
            set({ isLoading: false });
          }
        },
      }),
      {
        name: 'auth-storage',
        // Only persist non-sensitive data
        partialize: (state) => ({
          user: state.user,
          isInitialized: state.isInitialized,
        }),
      }
    ),
    { name: 'auth-store' }
  )
);

// Initialize auth state listener
let unsubscribe: (() => void) | null = null;

export const initializeAuth = () => {
  if (unsubscribe) return; // Already initialized

  unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
    useAuthStore.getState().setFirebaseUser(firebaseUser);
    
    if (firebaseUser) {
      try {
        // Fetch real user data from Firestore
        const user = await FirestoreService.getUserProfile(firebaseUser.uid);
        
        if (user) {
          useAuthStore.getState().setUser(user);
        } else {
          // User exists in Firebase Auth but not in Firestore
          // This shouldn't happen in normal flow, but handle gracefully
          console.warn('User exists in Auth but not in Firestore');
          useAuthStore.getState().setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        useAuthStore.getState().setError('Failed to load user profile');
        useAuthStore.getState().setUser(null);
      }
    } else {
      useAuthStore.getState().setUser(null);
    }
    
    useAuthStore.getState().setInitialized(true);
  });
};

// Cleanup function
export const cleanupAuth = () => {
  if (unsubscribe) {
    unsubscribe();
    unsubscribe = null;
  }
};