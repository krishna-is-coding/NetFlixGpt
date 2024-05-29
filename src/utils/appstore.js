import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appstore = configureStore({
  reducer: {
    user: useReducer,
    movie: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
export default appstore;
