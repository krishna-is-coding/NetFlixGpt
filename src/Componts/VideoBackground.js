import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  const dispatch = useDispatch();

  // fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos`,
      API_OPTION
    );
    const json = await data.json();
    console.log(json);
    // for filtering the trailer
    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];

    console.log(trailer);
    dispatch(addTrailerVideo(trailer.key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []); // add movieID as dependency to useEffect

  return (
    <div>
      {trailerVideo && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerVideo}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
