import { onAuthStateChanged, signOut } from "firebase/auth"; // import from "firebase/auth"
import { auth } from "../utils/firebase"; // Check if auth is correctly initialized
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_lANGUAGES, user_log } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { lang } from "../utils/languageContants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-screen h- [6vh] px-20  flex bg-gradient-to-b from-black justify-between absolute z-10">
      <div>
        <img src={user_log} alt="Log" className="w-[100px] h-[100px]" />
      </div>
      {user && ( // Use conditional rendering to check if user is signed in
        <div className="flex  p-8 space-x-2  ">
          {/* {showGptSearch && (*/}
          <select
            className="p-2 bg-red-500 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_lANGUAGES.map((lang) => (
              <option key={lang.identifer} value={lang.identifer}>
                {lang.name}
              </option>
            ))}
          </select>
          {/* )}*/}
          <button
            onClick={handleGptSearch}
            className="bg-red-400 my-1 rounded-lg"
          >
            {" "}
            GPT Search
            {/*{showGptSearch ? "Homepage" : "GPT Search"}*/}
          </button>
          <img className="w-8 h-8" alt="usericon" src={user.photoURL} />
          <button onClick={handleSignout} className="font-bold text-red-400">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
