import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase } from "firebase/database";
export const firebaseConfig = {
  apiKey: "AIzaSyAb0qKKyB6ZTfClI3vn-NI9vFExn7jgb9o",
  authDomain: "vouch-challenge-86399.firebaseapp.com",
  databaseURL:
    "https://vouch-challenge-86399-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vouch-challenge-86399",
  storageBucket: "vouch-challenge-86399.appspot.com",
  messagingSenderId: "270238671011",
  appId: "1:270238671011:web:a45e8e20e63d40f8b75f16",
  measurementId: "G-NT4X3465T0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
export { db };
