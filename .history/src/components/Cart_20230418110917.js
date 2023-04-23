import React, { useEffect } from "react";
import { removeItem } from "../store/slice/cartSlice";
import { incrementItem } from "../store/slice/cartSlice";
import { decrementItem } from "../store/slice/cartSlice";
import { toggleCart } from "../store/slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";
function Cart() {
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCloseCart = (close) => {
    dispatch(toggleCart(close));
  };
  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };
  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };
  return <div></div>;
}
export default Cart;
