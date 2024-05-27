import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movie);
  return (
    <div className=" bg-black">
      <div className=" -mt-48 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movie={movie.nowPlayingMovies} />
        <MovieList title={"TopRated"} movie={movie.topRatedMovies} />
        <MovieList title={"Popular"} movie={movie.popularMovies} />
        <MovieList title={"Upcoming"} movie={movie.upComingMovies} />

        <MovieList title={"Discovery"} movie={movie.discoveryMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
