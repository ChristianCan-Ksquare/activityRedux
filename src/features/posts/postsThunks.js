import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=1`
    ).then((response) => response.json());
    return response;
  } catch (error) {
    return error;
  }
});

export const postPost = createAsyncThunk(
  "posts/postPost",
  async (body, thunkAPI) => {
    const { posts } = thunkAPI.getState();

    return axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: 1,
        id: posts.length + 1,
        title: body.title,
        body: body.body,
      })
      .then(async function (response) {
        // Create a new post to add to the state
        const newPost = {
          userId: 1,
          id: posts.posts.at(-1).id + 1,
          title: body.title,
          body: body.body,
        };

        return newPost;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
);

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  return axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(async function (response) {
      return id;
    })
    .catch(function (error) {
      console.log(error);
    });
});
