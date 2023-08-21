import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:"AIzaSyBIt1RS4CJKt7AqoF9k7r_7nEZmxpgdKug",
  authDomain: "chatxr-abad8.firebaseapp.com",
  projectId: "chatxr-abad8",
  storageBucket: "chatxr-abad8.appspot.com",
  messagingSenderId: "798419220572",
  appId: "1:798419220572:web:5151319ef9f140ed8e0e99",
  measurementId: "G-TTPFTYS2YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);