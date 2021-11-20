import { createSlice } from "@reduxjs/toolkit";
import { getPosts, postPost, deletePost } from "./postsThunks";

const initialState = {
  posts: [],
  selectedPostId: "",
  isLoading: false,
  hasError: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    clearError: (state) => {
      state.hasError = false;
    },
    setSelectedPost: (state, action) => {
      state.selectedPostId = action.payload;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
      state.isLoading = false;
    },
    [getPosts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [postPost.pending]: (state) => {
      state.hasError = false;
      state.isLoading = true;
    },
    [postPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
      state.isLoading = false;
    },
    [postPost.rejected]: (state) => {
      state.hasError = true;
      state.isLoading = false;
    },
    [deletePost.pending]: (state) => {
      state.hasError = false;
      state.isLoading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts.splice(
        state.posts.findIndex((post) => post.id === action.payload),
        1
      );
      state.isLoading = false;
    },
    [deletePost.rejected]: (state) => {
      state.hasError = true;
      state.isLoading = false;
    },
  },
});

export const { setSelectedPost, clearError } = postsSlice.actions;

export default postsSlice.reducer;
