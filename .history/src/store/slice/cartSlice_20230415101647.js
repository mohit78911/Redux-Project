import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggl

  },
});

//export const {toggleCart, addItem, removeItem, incrementItem, decrementItem} = cartSlice.action
export default cartSlice.reducer;
