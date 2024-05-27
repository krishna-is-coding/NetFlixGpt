import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?sspage=1",
        API_OPTION
      );
      const json = await data.json();
      //console.log(json.results);
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
  return null;
};

export default useTopRatedMovies;
