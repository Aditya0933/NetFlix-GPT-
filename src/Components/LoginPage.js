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

import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";

import { addUser } from "../Utils/userSlice";
import {BG_URL} from "../Utils/constant";

const Login = () => {
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
              // console.log("This is current User...");
              // console.log("This is current User..." + auth.currentUser);
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              setValidEmailPassMessage(message);
              // ...
            });
          // console.log(user);
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
          // console.log(user);
          // console.log("User Sign In");
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
    signInWithPopup(auth, provider).then((date) => {
      setgoogleSignInValue(email.current.value);
      localStorage.setItem("Email-", email.current.value);
    });
  };

  useEffect(() => {
    setgoogleSignInValue(localStorage.getItem("Email"));
  });

  return (
    <div>
      {/* Background IMG of Netflix... */}
      <div className="fixed -z-10">
        <img
          className="bg-cover bg-center max-w-none"
          src={BG_URL}
          alt="WebSite-Background"
          />
      </div>
      {/* Header of Website... */}
      <div>
        <Header />
      </div>

      <div className="flex justify-center py-14 sm:py-16 md:py-20 lg:py-24">
        {/* Form Content... */}
        <form
          className="max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg  bg-[rgba(0,0,0,.75)] text-white  rounded-md p-8 mx-4 sm:py-8 md:py-12 lg:py-16"
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
                  className="p-2 sm:p-4 my-1 sm:my-3 rounded-md bg-slate-800 text-xl text-[#b3b3b3] w-full"
                ></input>
              )}
            </div>
            <div>
              <input
                ref={email}
                type="text"
                placeholder="Email Address"
                className="p-2 sm:p-4 my-1 sm:my-3 rounded-md bg-slate-800 text-xl text-[#b3b3b3] w-full"
              ></input>
            </div>
            <div>
              <input
                ref={password}
                className="p-2 sm:p-4 my-1 sm:my-3 rounded-md bg-slate-800 text-xl text-[#b3b3b3] w-full"
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
                className="p-2 sm:p-3 bg-[#e50914] w-full mt-4 sm:mt-8 mb-2 sm:mb-4 text-xl rounded"
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
            className="flex justify-center border-2 cursor-pointer px-1 py-2 sm:px-2 sm:py-3 rounded-sm mt-5 sm:mt-10 mb-4"
            onClick={() => GoogleSignInClickHandler()}
          >
            <button className="sm:text-xl ">
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
            <p className="text-[#b3b3b3] sm:text-xl my-3">
              New to Netflix?{" "}
              <span
                className=" text-white cursor-pointer"
                onClick={() => SignUpFormHandler()}
              >
                {signInForm ? "Sign Up Now" : "Sign In Now"}
              </span>{" "}
              .
            </p>
            <p className="pr-2 text-[#b3b3b3] sm:text-sm tracking-[.2px] leading-[24px]">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <p className="  text-[#b3b3b3] text-md tracking-[.2px] leading-[20px]">
              {collapse ? (
                <p>
                  The information collected by Google reCAPTCHA is subject to
                  the Google Privacy Policy and Terms of Service, and is used
                  for providing, maintaining, and improving the reCAPTCHA
                  service and for general security purposes (it is not used for
                  personalised advertising by Google){" "}
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
    </div>
  );
};

export default Login;
