import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth }  from "firebase/auth"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAa5pKne6_Emi-q15zdGeia8VcdztZQNMs",
  authDomain: "vanlife-project.firebaseapp.com",
  projectId: "vanlife-project",
  storageBucket: "vanlife-project.appspot.com",
  messagingSenderId: "1097889117659",
  appId: "1:1097889117659:web:fa06f12936c27fd113a3fe"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth()
export const storage = getStorage()