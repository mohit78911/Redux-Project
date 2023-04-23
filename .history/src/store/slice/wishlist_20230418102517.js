import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  wishItems: [],
};

const wishlist = createSlice({
  name: "wish",
  initialState,
  reducers: {

    toggleCart(state, action) {
      state.isCartOpen = action.payload;
    },
    
    wishItems(state, action) {
      const newItemId = action.payload.id;
      const existingItem = state.wishItems.find(
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

export const { wishItems } = wishlist.actions;
export default wishlist.reducer;
