import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./items/itemsSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: [thunk],
});
