import { configureStore } from "@reduxjs/toolkit";
import mm from "./slice/cartSlice";
import wish 

const store = configureStore({
  reducer: {
    cart: mm,
  },
});
export default store;