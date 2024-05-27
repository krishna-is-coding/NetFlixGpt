import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addDiscoveryMovies: (state, action) => {
      state.discoveryMovies = action.payload;
    },
  },
});
export const {
  addnowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpComingMovies,
  addTopRatedMovies,
  addDiscoveryMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
