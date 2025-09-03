import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

console.log('[Firebase] Initializing with config:', {
  ...firebaseConfig,
  apiKey: firebaseConfig.apiKey ? '***' + firebaseConfig.apiKey.slice(-4) : 'MISSING'
});

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Connect to emulators in development (only if not already connected)
if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATORS === 'true') {
  try {
    // Check if emulators are already connected by attempting to connect
    // Firebase SDK will throw if already connected
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
  } catch (error) {
    // Already connected, ignore
  }
  
  try {
    connectFirestoreEmulator(db, 'localhost', 8080);
  } catch (error) {
    // Already connected, ignore
  }
  
  try {
    connectFunctionsEmulator(functions, 'localhost', 5001);
  } catch (error) {
    // Already connected, ignore
  }
}