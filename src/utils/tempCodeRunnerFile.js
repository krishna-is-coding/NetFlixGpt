import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";

const appStore = configureStore({
  reducer: {
    user: useReducer,
  },
});
export default appStore;
