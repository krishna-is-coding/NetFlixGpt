import { onAuthStateChanged, signOut } from "firebase/auth"; // import from "firebase/auth"
import { auth } from "../utils/firebase"; // Check if auth is correctly initialized
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { user_log } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-screen h- [6vh] px-20  flex bg-gradient-to-b from-black justify-between absolute z-10">
      <div>
        <img src={user_log} alt="Log" className="w-[100px] h-[100px]" />
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
