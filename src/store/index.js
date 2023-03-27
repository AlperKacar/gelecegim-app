import { configureStore } from "@reduxjs/toolkit";
import userInformation from "./userInformation";

const store = configureStore({
  reducer: {
    userInformation,
  },
});

export default store;
