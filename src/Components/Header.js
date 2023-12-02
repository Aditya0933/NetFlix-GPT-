import Logo from "../IMG/Netflix_Logo.png";
import { SUPPORTED_LANGUAGES, user_Avtar } from "../Utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);



  //Sign Out Handler...
  const SignOutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
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
      } else {
        dispatch(removeUser());
        navigate("/");

        // ...
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  // Gpt Search Click Handler ....
  const GptSearchClickHandler = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const LanguageChangeHandler = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="flex justify-between">
      <div className="px-4 sm:px-8 sm:py-2 bg-gradient-to-b from-black z-10">
        <img className="w-36 sm:w-44" src={Logo} alt="Logo-IMG"></img>
      </div>
      {user && (
        <div className="flex items-center z-13 bg-slate-50">
          {/* Language ... */}
          {showGptSearch && <select onChange={LanguageChangeHandler}>
            {SUPPORTED_LANGUAGES.map((lang) => (<option key={lang.identifiers} value={lang.identifiers}>{lang.name}</option>))}
          </select>}
          {/* Gpt Icon ... */}
          {showGptSearch ? (
            <button
              className="py-2 px-4 bg-purple-800 text-white rounded-lg"
              onClick={GptSearchClickHandler}
            >
              Home Page
            </button>
          ) : (
            <button
              className="py-2 px-4 bg-purple-800 text-white rounded-lg"
              onClick={GptSearchClickHandler}
            >
              GPT Search Enter
            </button>
          )}
          <img className="w-12 h-12 mr-2" alt="userIcon" src={user_Avtar} />
          <button className="font-bold text-lg" onClick={SignOutHandler}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
