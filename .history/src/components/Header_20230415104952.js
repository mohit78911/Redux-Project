import React from "react";

function Header() {
const {cartItems} useSe

  const cartQuantity = cartItems.length;
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
                {/* <span className="badge">{cartQuantity}</span> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
