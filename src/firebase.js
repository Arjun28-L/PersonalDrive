// Import necessary functions from Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { API_KEY,AUTH_DOMAIN,PROJECT_ID,STORAGE_BUCKET,MESSAGING_SENDER_ID,APP_ID } from './secrets.js';
// Your Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, provider, db, storage, collection, onSnapshot, addDoc, serverTimestamp, ref, uploadBytes, getDownloadURL };
