// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIM0X8TuBkgez9C2hfFOx4oDpgKYWRujc",
  authDomain: "clone-2cfea.firebaseapp.com",
  projectId: "clone-2cfea",
  storageBucket: "clone-2cfea.appspot.com",
  messagingSenderId: "27416826278",
  appId: "1:27416826278:web:49c286bece6b0831e6ff67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage=getStorage()
export const db= getFirestore()
