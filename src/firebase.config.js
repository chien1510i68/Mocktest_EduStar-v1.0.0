// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWxwuw0TDiWI_zPW7o6-mwVCivmh-8000",
  authDomain: "mocktest-13ff5.firebaseapp.com",
  projectId: "mocktest-13ff5",
  storageBucket: "mocktest-13ff5.appspot.com",
  messagingSenderId: "616514707216",
  appId: "1:616514707216:web:c89143573ee19340af4f95",
  measurementId: "G-SHRMNX0ZGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);