// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACIpHck5Cm7dZc2KJFjqftOAaEla3UTug",
  authDomain: "mocktestedustar.firebaseapp.com",
  projectId: "mocktestedustar",
  storageBucket: "mocktestedustar.appspot.com",
  messagingSenderId: "728042433894",
  appId: "1:728042433894:web:67d290b4434c2bc0d8eca7",
  measurementId: "G-01X718PSGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);