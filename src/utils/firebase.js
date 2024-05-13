// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDybWdq1Fj3W7q5fHOHqfL-fNaAjTum_Y",
  authDomain: "netflixgpt-a3a42.firebaseapp.com",
  projectId: "netflixgpt-a3a42",
  storageBucket: "netflixgpt-a3a42.appspot.com",
  messagingSenderId: "10384770802",
  appId: "1:10384770802:web:fa185a9da6980d651cf26b",
  measurementId: "G-K59RYL7PW0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
