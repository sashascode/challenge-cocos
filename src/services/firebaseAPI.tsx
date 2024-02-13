import * as firebase from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut 
} from 'firebase/auth';

export const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID
};

firebase.initializeApp(firebaseConfig);
const auth = getAuth();

export {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
}