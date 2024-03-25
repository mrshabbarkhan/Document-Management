import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Auth/authSlice"
import documentReducer from "./document/documentSlice"

const store = configureStore({
  reducer : {
    auth : authReducer,
    document : documentReducer,
  },
});
export default store;

