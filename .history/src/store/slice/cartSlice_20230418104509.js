import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state, action) {
      state.isCartOpen = action.payload;
    },

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

    removeItem(state,action){
      state.cartItems = state.cartItems.filter
    }
  },
});

export const { toggleCart, addItem } = cartSlice.actions;
export default cartSlice.reducer;
