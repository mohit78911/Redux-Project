import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  wishItems: [],
};

const wishlist = createSlice({
  name: "wish",
  initialState,
  reducers: {
     

    wishItems(state, action) {
      const newItemId = action.payload.id;
        const existingItem =   state.wishItems.find((item))
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
