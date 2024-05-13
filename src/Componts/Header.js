import { signOut } from "firebase/auth"; // Make sure to import from "firebase/auth"
import { auth } from "../utils/firebase"; // Check if auth is correctly initialized
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Make sure user state is populated correctly

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="w-screen h- [6vh] px-20  flex bg-gradient-to-b from-black justify-between absolute z-10">
      <div>
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Log"
          className="w-[100px] h-[100px]"
        />
      </div>
      {user && ( // Use conditional rendering to check if user is signed in
        <div className="flex  p-8 space-x-2  ">
          <img className="w-8 h-8" alt="usericon" src={user.photoURL} />
          <button onClick={handleSignout} className="font-bold text-red-950">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
