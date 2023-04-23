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
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <h4>LogicRays</h4>
            <div className="nav_menu">
               
              <div
                title="wish"
                className="cart_icon"
                onClick={() => handleOpenWish(true)}
              >
                <img
                  src="/image/heart1.svg"
                  style={{ Color: "white" }}
                  width={30}
                  alt="wish-icon"
                />
                <span className="badge">{wishQuantity}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Cart;
