import { createSlice } from "@reduxjs/toolkit";

const userInformationSlice = createSlice({
  name: "userInformation",
  initialState: {
    userInformation: null,
    userLoading: true,
    userHasErrors: false,
    userHasMessage: null,
    isLoggedIn: false,
  },
  reducers: {
    setUserInformationItemList: (state, { payload }) => {
      state.userInformation = payload.user || payload;
      state.isLoggedIn = payload.isLoggedIn;
      state.userLoading = false;
      state.userHasErrors = false;
      state.userHasMessage = null;
    },
    closeFirstLogin: (state, { payload }) => {
      state.userLoading = false;
    },
    failed: (state, { payload }) => {
      state.userLoading = false;
      state.userHasErrors = true;
      state.userHasMessage = payload;
    },

    userClear: (state, { payload }) => {
      state.userInformation = null;
      state.userLoading = false;
      state.userHasErrors = false;
      state.userHasMessage = null;
      state.isLoggedIn = false;
    },
  },
});

export const userInformationData = (state) => state.userInformation; // initialState üzerindeki bilgileri dışarı aktarma

export const {
  setUserInformationItemList,
  failed,
  userClear,
  closeFirstLogin,
} = userInformationSlice.actions; // functions dışarıya aktarılması

export default userInformationSlice.reducer;
