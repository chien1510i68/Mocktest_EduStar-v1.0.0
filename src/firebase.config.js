// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3wdSHNxncxUOOv87b2_X4lXf1IBseNCo",
  authDomain: "tryexam-a8549.firebaseapp.com",
  projectId: "tryexam-a8549",
  storageBucket: "tryexam-a8549.appspot.com",
  messagingSenderId: "943306386763",
  appId: "1:943306386763:web:bc801a3b4ae1255a130cce",
  measurementId: "G-30XG9WE6B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);