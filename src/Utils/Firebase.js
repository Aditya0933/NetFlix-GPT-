// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADg0pYUGg2oFb9UvMoGphyZRuAi-zcfZM",
  authDomain: "netflixgpt-3cf09.firebaseapp.com",
  projectId: "netflixgpt-3cf09",
  storageBucket: "netflixgpt-3cf09.appspot.com",
  messagingSenderId: "570671131115",
  appId: "1:570671131115:web:9a83694f4c1a509e3cd1ae",
  measurementId: "G-KW0XSZ7NQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};