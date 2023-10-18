import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your Firebase configuration
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

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("giriş edildi");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="email" placeholder="Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={createUser}>Register</button>
      </form>

      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
