import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterpath }) => {
  return (
    //pr used for gapping
    <div className="w-40 pr-4">
      <img alt="Moive Card" src={IMG_CDN_URL + posterpath} />
    </div>
  );
};

export default MovieCard;
