// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUhhVxUYipViouORcQMnKE3V7fILbH6yg",
  authDomain: "twitterlogin-ef68a.firebaseapp.com",
  projectId: "twitterlogin-ef68a",
  storageBucket: "twitterlogin-ef68a.appspot.com",
  messagingSenderId: "322787627939",
  appId: "1:322787627939:web:ce688777602d25f39b8016",
  measurementId: "G-M0JCFZRQQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);