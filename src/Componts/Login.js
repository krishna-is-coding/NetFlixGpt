import React, { useRef, useState } from "react";
import Browse from "./Browse";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidate(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // for updating profile
          updateProfile(user, {
            displayName: fullNameRef.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/150548664?s=400&u=d3c1c40591db30642fb9511ed7e23708a7dc9406&v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              Navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          console.log(user);
          Navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("login", user);

          Navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute">
        <img
          src=" https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bgImage"
        />
      </div>
      <Browse />

      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 p-12 bg-black absolute mx-auto right-0 left-0 my-44 text-black bg-opacity-70"
        >
          <h1 className="font-serif text-3xl mb-5 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            ref={emailRef}
            type="text"
            placeholder="Email Address"
            className="p-3 my-3 mt-3 w-full rounded-md bg-slate-200"
          />
          {!isSignInForm && (
            <input
              ref={fullNameRef}
              type="text"
              placeholder="Full Name"
              className="p-3 my-3 mt-3 w-full rounded-md bg-slate-200"
            />
          )}
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full rounded-md bg-slate-200"
          />
          <button
            type="submit"
            className="p-3 my-6 bg-red-600 w-full rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <p
            className="my-3 cursor-pointer text-white"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
