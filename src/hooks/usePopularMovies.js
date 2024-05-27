import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?sspage=1",
        API_OPTION
      );
      const json = await data.json();
      //console.log(json.results);
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
  return null;
};

export default usePopularMovies;
