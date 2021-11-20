import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk("authentication/logIn", () => {
  localStorage.setItem("authorized", "1");
  return 1;
});

export const logOut = createAsyncThunk("authentication/logOut", () => {
  localStorage.setItem("authorized", "0");
  return 0;
});
