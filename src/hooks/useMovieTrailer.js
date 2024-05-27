import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTION
    );
    const json = await data.json();
    //console.log(json);

    // Filter for the trailer
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    //console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []); // Add movieId as a dependency
};

export default useMovieTrailer;
