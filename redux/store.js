import { configureStore } from "@reduxjs/toolkit";
import blaReducer from "./blaSlice";
import userReducer from "./userSlice";
import billReducer from "./billSlice";
import productReducer from "./productSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    bla: blaReducer,
    bill:billReducer,
    product:productReducer,
  },
});
