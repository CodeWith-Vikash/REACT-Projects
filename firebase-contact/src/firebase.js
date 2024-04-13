// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgLSzG6euyQHU2Kr7XB_Glkt6k3sqW1vA",
  authDomain: "contact-form-1f640.firebaseapp.com",
  projectId: "contact-form-1f640",
  storageBucket: "contact-form-1f640.appspot.com",
  messagingSenderId: "1073431334731",
  appId: "1:1073431334731:web:dc41aa0093fbf9f4a3a2ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth()
export const storage= getStorage()
export const db= getFirestore()