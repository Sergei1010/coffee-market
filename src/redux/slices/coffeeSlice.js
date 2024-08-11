import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCoffee = createAsyncThunk(
  "items/fetchCoffeeStatus",
  async function (params) {
    const { page, sort, category, search } = params;
    const sortRequest = "&sortBy=" + sort.property + "&order=" + sort.direction;
    const categoryRequest = category ? "&category=" + category : "";
    const searchRequest = search ? "&search=" + search : "";
    const res = await axios.get(
      `https://669ddb2b9a1bda368004884e.mockapi.io/coffee?page=${page}&limit=8${sortRequest}${categoryRequest}${searchRequest}`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

export const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCoffee.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(fetchCoffee.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchCoffee.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const coffeeSelector = (state) => state.coffee;

export const { setItems } = coffeeSlice.actions;

export default coffeeSlice.reducer;
