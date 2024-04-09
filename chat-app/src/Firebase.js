// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwj_G8ka11uL3kOcpCvSe7KZ9iqrXj9d8",
  authDomain: "chat-app-4accd.firebaseapp.com",
  projectId: "chat-app-4accd",
  storageBucket: "chat-app-4accd.appspot.com",
  messagingSenderId: "862200758779",
  appId: "1:862200758779:web:5acebdd5772a5f7e38cb5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db=getFirestore()
