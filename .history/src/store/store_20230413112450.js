import { configureStore } from "@reduxjs/toolkit";
import mm from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: mm,
  },
});
export default store;