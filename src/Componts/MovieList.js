import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  console.log(movie);
  return (
    <div className="px-2 ">
      <h1 className="text-xl pt-0 py-2 text-white">{title}</h1>
      <div className=" flex  overflow-x-scroll ">
        <div className="flex ">
          {movie &&
            movie.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
