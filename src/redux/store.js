import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import coffee from "./slices/coffeeSlice";

export const store = configureStore({
  reducer: { filter, cart, coffee },
});
