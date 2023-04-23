import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { wishItems } from "../store/slice/wishlist";

function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishItems } = useSelector((state) => state.wish);

  const cartQuantity = cartItems.length;
  const wishQuantity = wishItems.length;
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="navbar">
            <h4>LogicRays</h4>
            <div className="nav_menu">
              <div
                title="cart"
                className="cart_icon"
                // onClick={() => handleOpenCart(true)}
              >
                <img src="/image/bag-icon.svg" alt="bag-icon" />
                <span className="badge">{cartQuantity}</span>
                <img
                  src="/image/heart1.svg" style={{Color:"white"}}
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
  );
}
export default Header;
