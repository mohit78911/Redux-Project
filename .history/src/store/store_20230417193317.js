import { configureStore } from "@reduxjs/toolkit";
import mm from "./slice/cartSlice";
import wis

const store = configureStore({
  reducer: {
    cart: mm,
  },
});
export default store;