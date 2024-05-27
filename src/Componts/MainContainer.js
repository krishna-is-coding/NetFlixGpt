import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTittle from "./VideoTittle";

const MainContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movie) return;

  const mainMovie = movie[0];
  // console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTittle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
