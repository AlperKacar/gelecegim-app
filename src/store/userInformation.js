import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "userInformation",
  initialState: {
    loading: true,
    hasErrors: false,
    hasMessage: null,
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    setItemList: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.hasErrors = false;
      state.hasMessage = null;
      state.isLoggedIn = true;
    },
    failed: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = true;
      state.hasMessage = payload;
    },
    setUserData: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = false;
      state.hasMessage = null;
      state.user = payload;
    },
    isLoggedInControl: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase( (state, action) => {
      return {
        ...state,
        ...action.payload.userInformation,
      };
    });
  },
});

export const userData = (state) => state.userInformation; // state üzerindeki bilgileri dışarı aktarma

export const { setItemList, failed, setUserData, isLoggedInControl } =
  userSlice.actions; // functions dışarıya aktarılması

export default userSlice.reducer;
