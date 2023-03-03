import { configureStore } from "@reduxjs/toolkit";
import userInformationSlice from "./private/userInformationSlice";
import userInformation from "./userInformation";

const store = configureStore({
    reducer:{
        userInformation,
        userInformationSlice
    }
})

export default store