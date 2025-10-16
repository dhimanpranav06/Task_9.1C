//Import the firebase SDK
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

// Firebase configuration of MyLoginApp-Firebase project
const firebaseConfig = {
    apiKey: "AIzaSyBlTOgotNZBTxAS9JKQsgdiofJzGk_bxrw",
    authDomain: "frontend-cde0e.firebaseapp.com",
    projectId: "frontend-cde0e",
    storageBucket: "frontend-cde0e.firebasestorage.app",
    messagingSenderId: "299172859337",
    appId: "1:299172859337:web:21b80106ede7d537d96c18"
};

// initialize Firebase
const app=initializeApp(firebaseConfig);

// Auth instance
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db=getFirestore(app);