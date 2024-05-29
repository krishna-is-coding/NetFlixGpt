import React from "react";
import lang from "../utils/languageContants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className=" pt-[20%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-col-12 ">
        <div>
          <input
            type="text"
            className=" w-[60%] m-3 p-3 col-span-9"
            placeholder={lang[langkey].gptSearchPlacholder}
          />
          <button
            className=" w-[32%] m-3 p-3
           col-span-3  bg-red-700 text-white rounded-lg"
          >
            {lang[langkey].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
