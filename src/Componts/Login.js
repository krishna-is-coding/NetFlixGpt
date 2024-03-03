import React, { useState } from "react";
import Header from "./Header";
import Browse from "./Browse";

const Login = () => {
  const [isSignFrom, setisSignFrom] = useState();

  const toggleSignInForm = () => {
    setisSignFrom(!isSignFrom);
  };
  return (
    <div>
      <Header />
      <Browse />
      <div>
        <form className=" w-3/12 p-12 bg-black absolute mx-auto right-0 left-0 my-44 text-white  bg-opacity-70">
          <h1 className="font-serif text-3xl mb-5">
            {isSignFrom ? "Sign In" : "Sign Up"}
          </h1>

          <input
            type="text"
            placeholder="Email Address "
            className=" p-3 my-3 mt-3 w-full rounded-md bg-slate-200 "
          />
          {!isSignFrom && (
            <input
              type="text"
              placeholder="Full Name"
              className=" p-3 my-3 mt-3 w-full rounded-md bg-slate-200"
            />
          )}
          <input
            type="password"
            placeholder="password"
            className="  p-3 my-3 w-full rounded-md bg-slate-200"
          />
          <button className="  p-3 my-6 bg-red-600 w-full rounded-md  ">
            {isSignFrom ? "Sign In" : "Sign Up"}
          </button>
          <p className="my-3 cursor-pointer" onClick={toggleSignInForm}>
            {isSignFrom
              ? "New to Netflix? Sign up now."
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
