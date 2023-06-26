import { createSlice } from "@reduxjs/toolkit";

const userInformation = createSlice({
  name: "userInformation",
  initialState: {
    mode: "light",
    user: null,
    token: null,
    time: null,
    isLogged: false,
    control: false,
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, { payload }) => {
      state.token = payload;
      state.isLogged = true;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setTime: (state, { payload }) => {
      state.time = payload;
    },
    setActivaitiona: (state, { payload }) => {
      state.control = true;
    },
    setLogout: (state, { payload }) => {
      state.token = null;
      state.user = null;
      state.isLogged = false;
    },
    setActivation: (state, { payload }) => {
      state.control = false;
    },
  },
});

export const userData = (state) => state.userInformation; // state üzerindeki bilgileri dışarı aktarma

export const {
  // setFriends,
  setProfile,
  setLogin,
  setLogout,
  setMode,
  setActivation,
  setActivaitiona,
  setUser,
  setTime,
} = userInformation.actions; // functions dışarıya aktarılması

export default userInformation.reducer;
