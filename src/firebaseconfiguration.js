// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLqp0hjW6D0YVt23JLLQxuzPV12JunuN0",
  authDomain: "viralsphere-bd4d1.firebaseapp.com",
  projectId: "viralsphere-bd4d1",
  storageBucket: "viralsphere-bd4d1.appspot.com",
  messagingSenderId: "710681664568",
  appId: "1:710681664568:web:8643092e3b979dd83b5acd",
  measurementId: "G-P02JWQ3N5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getAuth(app);
const provider = new GoogleAuthProvider();


export {database,provider};