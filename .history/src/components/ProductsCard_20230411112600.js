import React, { useState } from "react";

function ProductsCard(props) {
  const {img, rating, title, price} = props

  const [isAdded,setIsAdded] = useState(false);

const handleAddToCart = ()=>{
  const item={...props};

  setIsAdded(true)
  setTimeout(()=>{
    setIsAdded(false)
  },3000)
}

  return (
    <div>
      <div className="product_cart">
        <figure>
          <img src={img} alt="item-img" />
        </figure>
        <strong className="rating">{rating}</strong>
        <h4 className="title">{hello}</h4>
        <h3 className="price">100</h3>
      </div>
    </div>
  );
}
export default ProductsCard;
