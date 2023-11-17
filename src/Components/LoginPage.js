import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidData } from "../Utils/validate";
import Home from "./Home";

import { auth, provider } from "../Utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";

import { addUser } from "../Utils/userSlice";

const Login = () => {
  //When we have to move one page to anOther page then this will work...
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Related with Form Discreption Content...
  const [collapse, setcollapse] = useState(false);
  const [validEmailPassMessage, setValidEmailPassMessage] = useState(null);

  // Related with Sign In and Sign Up with Form Button...
  const [signInForm, setSignUpvar] = useState(true);

  // Related with Refreence of Email and Password Using [Ref Hook]...
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // Related with Sign In and Sign Up with Form Button...
  const FormButtonClicked = () => {
    //Validate Form Data...
    const message = checkValidData(email.current.value, password.current.value);
    setValidEmailPassMessage(message);

    if (message) return;

    if (!signInForm) {
      //Sign Up Logic...
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed Up
          const user = userCredential.user;
          const auth = getAuth();
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://cdn-icons-png.flaticon.com/512/666/666201.png",
          })
            .then(() => {
              // Profile updated!
              console.log("This is current User...");
              console.log("This is current User..." + auth.currentUser);
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              setValidEmailPassMessage(message);
              // ...
            });
          console.log(user);
          // If the User will L
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidEmailPassMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in Logic...
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          console.log("User Sign In");
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidEmailPassMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  // Related with  Sign In and Sign Up with Google Logic...
  const [googleSignInValue, setgoogleSignInValue] = useState("");

  // Related with Form Discreption Content...
  const LearnMoreHandler = () => {
    setcollapse(!collapse);
  };

  // Related with Form Discreption Content...
  const SignUpFormHandler = () => {
    setSignUpvar(!signInForm);
  };

  // Related with Sign In and Sign Up with Google Logic...
  const GoogleSignInClickHandler = () => {
    console.log("GoogleSignInClickHandler Clicked");
    signInWithPopup(auth, provider).then((date) => {
      setgoogleSignInValue(email.current.value);
      localStorage.setItem("Email-", email.current.value);
    });
    console.log("GoogleSignInClickHandler Un Clicked");
  };

  useEffect(() => {
    setgoogleSignInValue(localStorage.getItem("Email"));
  });

  return (
    <div>
      {/* Header of Website... */}
      <div>
        <Header />
      </div>

      {/* Background IMG of Netflix... */}
      <div>
        <img
          className="absolute bg-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="WebSite-Background"
        />
      </div>

      {/* Form Content... */}
      <form
        className="absolute w-3/12 my-36 mx-auto left-0 right-0 bg-[rgba(0,0,0,.75)] text-white p-16 rounded-md  "
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Heading of Form... */}
        <div>
          <h2 className="text-4xl font-medium mb-8">
            {signInForm ? "Sign In" : "Sign Up"}
          </h2>
        </div>

        {/* Input Box of Form... */}
        <div>
          <div>
            {!signInForm && (
              <input
                type="text"
                placeholder="Enter Full Name"
                className="p-4 my-3 rounded-md bg-slate-800 text-xl text-[#b3b3b3] w-full"
              ></input>
            )}
          </div>
          <div>
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-4 my-3 rounded-md bg-slate-800 text-xl text-[#b3b3b3] w-full"
            ></input>
          </div>
          <div>
            <input
              ref={password}
              className="p-4 my-3 rounded-md bg-slate-800 text-xl text-[#b3b3b3] w-full"
              type="password"
              placeholder="Password"
            ></input>
          </div>

          <p className="text-[#e50914]">{validEmailPassMessage}</p>
        </div>

        {/* Sign In and Sign Up with Form Button */}
        <div>
          <div>
            <button
              className="p-3 bg-[#e50914] w-full mt-8 mb-4 text-xl rounded"
              onClick={FormButtonClicked}
            >
              {signInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <input type="checkbox" className="bg-slate-800 "></input>
              <p className="ml-2 text-[#b3b3b3]">Remember me</p>
            </div>
            <div>
              <p className="text-[#b3b3b3]">Need help?</p>
            </div>
          </div>
        </div>

        {/* Sign In and Sign Up with Google Logic...*/}
        <div
          className="flex justify-center border-2 cursor-pointer py-3 rounded-sm mt-10 mb-4"
          onClick={() => GoogleSignInClickHandler()}
        >
          <button className="text-xl">
            {signInForm ? "Sign In with Google" : "Sign Up with Google"}
          </button>
          <img
            className="h-[30px] w-[30px] ml-3"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="google logo"
          />
        </div>

        {/* Form Discreption Content... */}
        <div className=" ">
          <p className="text-[#b3b3b3] text-xl my-3">
            New to Netflix?{" "}
            <span
              className=" text-white cursor-pointer"
              onClick={() => SignUpFormHandler()}
            >
              {signInForm ? "Sign Up Now" : "Sign In Now"}
            </span>{" "}
            .
          </p>
          <p className="pr-2 text-[#b3b3b3] text-md tracking-[.2px] leading-[24px]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
          <p className="  text-[#b3b3b3] text-md tracking-[.2px] leading-[20px]">
            {collapse ? (
              <p>
                The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalised
                advertising by Google){" "}
                <button
                  className="text-blue-600 cursor-pointer ml-2"
                  onClick={() => setcollapse(false)}
                >
                  {" "}
                  See less
                </button>{" "}
              </p>
            ) : (
              <button
                className="text-blue-600 cursor-pointer "
                onClick={() => LearnMoreHandler()}
              >
                Learn more.
              </button>
            )}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
