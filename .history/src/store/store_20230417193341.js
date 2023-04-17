import { configureStore } from "@reduxjs/toolkit";
import mm from "./slice/cartSlice";
import wish from "./slice/wishlist"

const store = configureStore({
  reducer: {
    cart: mm,
    wish :
  },
});
export default store;