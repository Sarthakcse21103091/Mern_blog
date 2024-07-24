// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-54380.firebaseapp.com",
  projectId: "mern-blog-54380",
  storageBucket: "mern-blog-54380.appspot.com",
  messagingSenderId: "428331976383",
  appId: "1:428331976383:web:3e03f6f48a999f7876680a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

