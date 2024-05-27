import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addnowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?sspage=1",
        API_OPTION
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addnowPlayingMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return null;
};

export default useNowPlayingMovies;
