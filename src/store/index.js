import { configureStore } from "@reduxjs/toolkit";
import userInformation from "./userInformation";
import userInformationData from "./private/userInformationSlice";

const store = configureStore({
    reducer:{
        userInformation,
        userInformationData
    }
})

export default store