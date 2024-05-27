import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?sspage=1",
        API_OPTION
      );
      const json = await data.json();
      //console.log(json.results);
      dispatch(addUpComingMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getUpComingMovies();
  }, []);
  return null;
};

export default useUpComingMovies;
