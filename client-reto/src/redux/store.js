import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./items/itemsSlice";
import searchReducer from "./search/searchSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    search: searchReducer,
  },
  middleware: [thunk],
});
