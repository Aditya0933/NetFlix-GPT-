import Logo from "../IMG/Netflix_Logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector(store => store.user);
  console.log("This is Photo URL...")
  console.log(user)

  //Sign Out Handler...
  const SignOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };

  return (
    <div className="flex justify-between">
      <div className="px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src={Logo} alt="Logo-IMG"></img>
      </div>
      {user && <div className="flex items-center">
        <img
          className="w-10 h-10 mr-2"
          alt="userIcon"
          src={user.photoURL}
        />
        <button className="font-bold text-lg" onClick={SignOutHandler}>
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
