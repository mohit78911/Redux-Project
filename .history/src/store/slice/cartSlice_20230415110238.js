import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   
    addItem(state, action) {
      const newItemId = action.payload.id;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItemId
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push(action.payload);
      }
    },
  },
});

export const {  addItem } = cartSlice.action;
export default cartSlice.reducer;
