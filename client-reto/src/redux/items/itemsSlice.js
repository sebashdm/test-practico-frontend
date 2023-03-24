import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/index";
import { HTTP_STATUS } from "../constants";

export const fecthAsyncItems = createAsyncThunk(
  "items/fecthAsyncItems",
  async (term) => {
    const response = await axios.get(`/api/items?q=${term}`);
    return response.data;
  }
);

export const fecthAsyncItemsDetail = createAsyncThunk(
  "items/fecthAsyncItemsDetail",
  async (id) => {
    const response = await axios.get(`/api/items/${id}`);
    return response.data;
  }
);

const initialState = {
  items: [],
  selectedItem: {},
  loading: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthAsyncItems.pending, (state) => {
        state.loading = HTTP_STATUS.PENDING;
        console.log("Pending");
      })
      .addCase(fecthAsyncItems.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = HTTP_STATUS.FULFILLED;
        console.log("Fetched Successfully");
      })
      .addCase(fecthAsyncItems.rejected, (state) => {
        state.loading = HTTP_STATUS.REJECTED;
        console.log("Rejected");
      })
      .addCase(fecthAsyncItemsDetail.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully");
        state.selectedItem = payload;
      });
  },
});

export const { addItems } = itemsSlice.actions;
export const getAllItems = (state) => state.items;
export const getSelectedItem = (state) => state.items.selectedItem;
export const getLoadingStatus = (state) => state.items.loading;
export default itemsSlice.reducer;
