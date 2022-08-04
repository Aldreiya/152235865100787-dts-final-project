import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crypto-152235865100787.firebaseapp.com",
  projectId: "crypto-152235865100787",
  storageBucket: "crypto-152235865100787.appspot.com",
  messagingSenderId: "611178300336",
  appId: "1:611178300336:web:c309514756bd62474fcc75"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };