import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { backgro } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="absolute z-0">
        <img alt="logo" src={backgro} className="w-full" />
      </div>
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
