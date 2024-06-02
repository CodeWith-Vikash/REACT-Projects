
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1ChaMewU65OUARYyzijBwlSVB6iIym3I",
  authDomain: "reactchat-8b481.firebaseapp.com",
  projectId: "reactchat-8b481",
  storageBucket: "reactchat-8b481.appspot.com",
  messagingSenderId: "75349844921",
  appId: "1:75349844921:web:684ce7401289089a988c68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db = getFirestore()
export const storage = getStorage()