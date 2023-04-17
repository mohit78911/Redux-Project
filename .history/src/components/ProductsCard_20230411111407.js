import React from "react";

function ProductsCard(props) {
  const {img, rating, title, price} = props

  const []
  return (
    <div>
      <div className="product_cart">
        <figure>
          <img src={"/image/prod1.png"} alt="item-img" />
        </figure>
        <strong className="rating">111</strong>
        <h4 className="title">hello</h4>
        <h3 className="price">100</h3>
      </div>
    </div>
  );
}
export default ProductsCard;
