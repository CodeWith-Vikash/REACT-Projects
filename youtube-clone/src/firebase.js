// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyxmfhPMPRHvTf2HEimPkhZNFvztzL5qo",
  authDomain: "api-key-2024-420901.firebaseapp.com",
  projectId: "youtube-api-key-2024-420901",
  storageBucket: "youtube-api-key-2024-420901.appspot.com",
  messagingSenderId: "900893632717",
  appId: "1:900893632717:web:9a39ff417c5a64cd30a184"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage=getStorage()
export const db= getFirestore()