import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";

const appstore = configureStore({
  reducer: {
    user: useReducer,
  },
});
export default appstore;
