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

  const cartQuantity = cartItems.length;

  const cartTotal = cartItems.map((item)=>item.price * item.quantity).reduce((prevValue,currValue)=>prevValue + currValue,0);
  return( 
  <div>
{
  isCartOpen && (
    <div id="cart">
<div className="cart_content">
  <div className="cart_head">
    <h2>Cart<small>({cartQuantity})</small></h2>
    <div title="Close" className="close_btn" onClick={()=>handleCloseCart(false)}>
      <span>&times;</span>
    </div>
  </div>
  <div className="cart_body">
    {
      cartQuantity===0?(
        <h2>Cart is Empty</h2>
      ) : (
        cartItems.map((item)=>{
          const{id,img,title,price,quantity} = item
          const itemTotal = price * quantity 
          return(
            <div className="cart_items" key={id}>
              <figure className="cart_items_img">
                <img src={img} alt="product-img"/>
              </figure>
              <div>
                
              </div>
            </div>
          )
        })
      )
    }
  </div>
</div>
    </div>
  )
}
  </div>)
}
export default Cart;
