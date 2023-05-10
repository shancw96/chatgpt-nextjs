// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASqduaoiU5krEc5PzSLQkzWDMM-9IDnB0",
  authDomain: "chatbot-68280.firebaseapp.com",
  projectId: "chatbot-68280",
  storageBucket: "chatbot-68280.appspot.com",
  messagingSenderId: "885750308278",
  appId: "1:885750308278:web:7d6f5f62198be298673517",
  measurementId: "G-4KFVCP5D17"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
