import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const itemExists = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
