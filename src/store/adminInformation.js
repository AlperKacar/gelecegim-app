import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "adminInformation",
  initialState: {
    mode: "light",
    admin: null,
    isLoggedInAdmin: false,
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setAdminLogin: (state, { payload }) => {
      state.admin = payload;
      state.isLoggedInAdmin = true;
    },
    setAdminLogout: (state) => {
      state.admin = null;
      state.isLoggedInAdmin = false;
    },
  },
});

export const adminData = (state) => state.adminInformation; // state üzerindeki bilgileri dışarı aktarma

export const { setAdminLogin, setAdminLogout } = adminSlice.actions; // functions dışarıya aktarılması

export default adminSlice.reducer;
