import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "./authenticationThunks";

const initialState = {
  isAuthenticated: localStorage.getItem("authorized") === "1" ? 1 : 0,
  isLoading: false,
  hasError: false,
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,

  reducers: {
    clearError: (state) => {
      state.hasError = false;
    },
  },
  extraReducers: {
    [logIn.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [logIn.fulfilled]: (state, action) => {
      state.isAuthenticated = action.payload;
      state.isLoading = false;
    },
    [logIn.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [logOut.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [logOut.fulfilled]: (state, action) => {
      state.isAuthenticated = action.payload;
      state.isLoading = false;
    },
    [logOut.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { clearError } = authenticationSlice.actions;

export default authenticationSlice.reducer;
