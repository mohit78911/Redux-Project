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
        const existingItem =   state.wishItems.push(action.payload) 
         
    },
  },
});

export const { toggleCart, wishItem } = wishlist.actions;
export default cartSlice.reducer;
