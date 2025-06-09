// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Debug: Check environment variables (remove in production)
if (process.env.NODE_ENV === 'development') {
  console.log('Firebase env vars loaded:', Object.keys(process.env).filter(key => key.includes('FIREBASE')).length > 0);
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Validate that all required environment variables are present (only in browser)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  const requiredEnvVars = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  if (missingVars.length > 0) {
    console.error(`Missing required environment variables: ${missingVars.join(', ')}. Please check your .env.local file.`);
  }
}



// Initialize Firebase (only if we have the required config)
let app: ReturnType<typeof initializeApp> | null = null;
let analytics: ReturnType<typeof getAnalytics> | null = null;
let db: ReturnType<typeof getFirestore> | null = null;

if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  app = initializeApp(firebaseConfig);
  
  // Initialize Analytics (only on client side)
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
  
  // Initialize Firestore
  db = getFirestore(app);
}

// Database functions
export const saveUserData = async (data: {
  email: string;
  name: string;
  gender: string;
  age: number;
  sinResult: string;
  subtypeResult?: string;
  sinScores: Record<string, number>;
  subtypeScores?: Record<string, Record<string, number>>;
  answers: number[][] | number[] | string;
  submittedAt: string;
  location?: string;
  }) => {
    if (!db) {
      console.warn('Firebase not initialized. Skipping database save for development.');
      return 'dev-mode-skip';
    }
  
  try {
    const docRef = await addDoc(collection(db, "users"), {
      ...data,
      timestamp: serverTimestamp(),
      ip: null, // Can be populated server-side if needed
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const saveEmailLead = async (data: {
  email: string;
  name: string;
  sinResult: string;
  source: string;
}) => {
  if (!db) {
    console.warn('Firebase not initialized. Skipping email lead save for development.');
    return 'dev-mode-skip';
  }
  
  try {
    const docRef = await addDoc(collection(db, "email_leads"), {
      ...data,
      timestamp: serverTimestamp(),
    });
    console.log("Email lead saved with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error saving email lead: ", e);
    throw e;
  }
};

export { db, analytics }; 