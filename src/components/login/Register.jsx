import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { useDispatch } from "react-redux";
import { useAccount } from "../../store/auth/hooks";
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUhhVxUYipViouORcQMnKE3V7fILbH6yg",
  authDomain: "twitterlogin-ef68a.firebaseapp.com",
  projectId: "twitterlogin-ef68a",
  storageBucket: "twitterlogin-ef68a.appspot.com",
  messagingSenderId: "322787627939",
  appId: "1:322787627939:web:ce688777602d25f39b8016",
  measurementId: "G-M0JCFZRQQB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
function Register({ login }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
 
  const database = getDatabase(app);
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        set(ref(database, "users/" + user.uid), {
          userName: name,
          email: email,
          profileImg: "",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    
  };

  return (
    // <div>
    //   <h2>Register</h2>
    //   <form>
    //     <input type="email" placeholder="Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
    //     <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //     <button type="button" onClick={createUser}>Register</button>
    //   </form>

    //   <Link to="/login">Login</Link>
    // </div>
    <div className="bg-white h-screen  ">
      <div className="w-[600px] h-[650px] bg-black   mx-auto rounded-[25px] px-4">
        <div className="flex  items-center gap-[45%]">
          <Link to="/">
            <svg viewBox="0 0 24 24" className="h-5">
              <path
                d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
                fill="#fff"
              />
            </svg>
          </Link>

          <Link
            to="/"
            className="text-[color:var(--color-base)] w-[3.25rem] h-[3.25rem] rounded-full flex items-center justify-center hover:bg-[color:var(--background-third)] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-[1.875rem]">
              <path
                fill="currentColor"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </Link>
        </div>

        <div className="px-[25%]">
          <h2 className="text-left text-3xl font-bold my-9">Sign in to X</h2>
          <form action="" onClick={login}>
            <input
              className="h-[60px] w-full bg-transparent before: border border-gray rounded-sm "
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Phone, email, or username"
            />
            <input
              className="h-[60px] w-full bg-transparent before: border border-gray rounded-sm "
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              className="h-[60px] my-6 w-full bg-transparent"
              input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-white text-[#0F1419] text-xl rounded-full py-[5px] font-semibold"
              type="button"
              onClick={createUser}
            >
              Register
            </button>
          </form>

          <Link
            className="block text-center mt-6 bg-white text-[#0F1419] text-xl rounded-full py-[5px] font-semibold"
            to="/login"
          >
            Login
          </Link>

          <button
            className="w-full text-center mt-6 bg-transparent text-white  border border-gray rounded-full py-[5px] font-semibold"
            to="/register"
          >
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
