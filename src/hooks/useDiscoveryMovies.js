import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";

import { addDiscoveryMovies } from "../utils/movieSlice";

import { useEffect } from "react";

const useDiscoveryMovies = () => {
  const dispatch = useDispatch();

  const getDiscoveryMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/discover/movie",
        API_OPTION
      );
      const json = await data.json();
      //console.log(json.results);
      dispatch(addDiscoveryMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getDiscoveryMovies();
  }, []);
  return null;
};

export default useDiscoveryMovies;
