// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7sD-4Tcr3Y868CZ60GzzbJ2zTeS-9IGU",
  authDomain: "hotel-app-565c7.firebaseapp.com",
  projectId: "hotel-app-565c7",
  storageBucket: "hotel-app-565c7.appspot.com",
  messagingSenderId: "519161533626",
  appId: "1:519161533626:web:59692628692ecf1a999e83",
  measurementId: "G-PJ9V2GMC8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);