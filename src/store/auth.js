import { createSlice } from "@reduxjs/toolkit";
import { login, logout, updateProfile, register } from "./action";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = action.error.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
