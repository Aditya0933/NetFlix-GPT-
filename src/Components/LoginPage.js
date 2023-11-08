import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const [collapse, setcollapse] = useState(false);

  const [signInForm, setSignUpvar] = useState(true);

  const LearnMoreHandler = () => {
    setcollapse(!collapse);
  };

  const SignUpFormHandler = () => {
    setSignUpvar(!signInForm);
  };

  return (
    <div>
      {console.log("This is Login From...")}
      <div>
        <Header />
      </div>
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="WebSite-Background"
        />
      </div>
      <form className="absolute w-3/12 my-36 mx-auto left-0 right-0 bg-[rgba(0,0,0,.75)] text-white p-16 rounded-md">
        <div>
          <h2 className="text-4xl font-medium mb-8">
            {signInForm ? "Sign In" : "Sign Up"}
          </h2>
        </div>
        <div>
          <div>
            {
                !signInForm && (<input
                    type="text"
                    placeholder="Enter Full Name"
                    className="p-4 my-3 rounded-md bg-slate-800 text-xl text-[#b3b3b3] w-full"
                  ></input>)
            }
            
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 my-3 rounded-md bg-slate-800 text-xl text-[#b3b3b3] w-full"
            ></input>
          </div>
          <div>
            <input
              className="p-4 my-3 rounded-md bg-slate-800 text-xl text-[#b3b3b3] w-full"
              type="password"
              placeholder="Password"
            ></input>
          </div>
        </div>

        <div>
          <div>
            <button className="p-3 bg-[#e50914] w-full mt-8 mb-4 text-xl rounded">
                {
                    signInForm ? "Sign In" : "Sign Up"
                }
              
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
        <div className="mt-14 ">
          <p className="text-[#b3b3b3] text-xl my-3">
            New to Netflix?{" "}
            <button className=" text-white" 
                onClick={() => SignUpFormHandler()}>
                    {
                        signInForm ? "Sign Up Now" : "Sign In Now"
                    }
            </button>{" "}
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
      {/* <div>
                <Footer/>
            </div> */}
    </div>
  );
};

export default Login;
