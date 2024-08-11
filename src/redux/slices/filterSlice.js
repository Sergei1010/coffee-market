import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  sort: {
    id: 1,
    name: "популярністю | asc",
    property: "rating",
    direction: "asc",
  },
  page: 1,
  search: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setFilters(state, action) {
      state.category = action.payload.category;
      state.sort.property = action.payload.sort;
      state.sort.direction = action.payload.order;
      state.page = action.payload.page;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const filterSelector = (state) => state.filter;

export const { setSort, setCategory, setPage, setFilters, setSearch } =
  filterSlice.actions;

export default filterSlice.reducer;
