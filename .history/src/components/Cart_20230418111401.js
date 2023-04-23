import React, { useEffect } from "react";
import {
  removeItem,
  incrementItem,
  decrementItem,
  toggleCart,
} from "../store/slice/cartSlice";
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

  const cartQuantity = cartItems.length
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <h4>LogicRays</h4>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Cart;
