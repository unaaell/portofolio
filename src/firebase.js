import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwuwDkD3mIw8oGo8olNxdUj-fCDq66rs0",
  authDomain: "portofolio-hamidah.firebaseapp.com",
  projectId: "portofolio-hamidah",
  storageBucket: "portofolio-hamidah.appspot.com",
  messagingSenderId: "469983721944",
  appId: "1:469983721944:web:6f116129ec0b6b2b7e1aad",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
export const db = getFirestore(app);
