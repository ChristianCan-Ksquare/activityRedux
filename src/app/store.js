import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import authenticationReducer from "../features/authentication/authenticationSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    authentication: authenticationReducer,
  },
});
