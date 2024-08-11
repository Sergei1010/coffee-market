import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLS";
const { itemsLS, priceLS, countLS } = getCartFromLS();

const initialState = {
  totalPrice: priceLS,
  totalCount: countLS,
  items: itemsLS,
};

const recalculationCart = (state) => {
  state.totalPrice = state.items.reduce((sum, item) => {
    return sum + item.price * item.count;
  }, 0);
  state.totalCount = state.items.reduce((sum, item) => {
    return sum + item.count;
  }, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findItem = state.items.find(
        (obj) => obj.cartId === action.payload.cartId
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      recalculationCart(state);
    },

    removeProduct(state, action) {
      state.items = state.items.filter((obj) => obj.cartId !== action.payload);
      recalculationCart(state);
    },

    increaseProduct(state, action) {
      const findItem = state.items.find((obj) => obj.cartId === action.payload);
      if (findItem.count) {
        findItem.count++;
        recalculationCart(state);
      }
    },

    reduceProduct(state, action) {
      const findItem = state.items.find((obj) => obj.cartId === action.payload);
      if (findItem.count > 1) {
        findItem.count--;
        recalculationCart(state);
      }
    },

    clearCart(state) {
      state.items = [];
      recalculationCart(state);
    },
  },
});

export const cartSelector = (state) => state.cart;

export const {
  addProduct,
  removeProduct,
  increaseProduct,
  reduceProduct,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
