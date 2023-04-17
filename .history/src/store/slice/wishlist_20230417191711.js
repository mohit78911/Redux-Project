import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  wishItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
     

    wishItems(state, action) {
      const newItemId = action.payload.id;

      const existingItem = state.cartItems.find(
        (item) => item.id === newItemId
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.wishItems.push(action.payload);
      }
    },
  },
});

export const { toggleCart, wishItem } = cartSlice.actions;
export default cartSlice.reducer;
