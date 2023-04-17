import React, { useState } from "react";
import { addItem } from "../store/slice/cartSlice";
useD

function ProductsCard(props) {
  const { img, rating, title, price } = props;

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const item = { ...props };

    
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  return (
    <div>
      <div className="product_card">
        <figure>
          <img src={img} alt="item-img" />
        </figure>
        <strong className="rating">{rating}</strong>
        <h4 className="title">{title}</h4>
        <h3 className="price">{price.toLocaleString()}</h3>
        <button
          type="button"
          className={`btn ${isAdded ? "Added" : " "}`}
          onClick={handleAddToCart}
        >
          {isAdded ? "Added" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}
export default ProductsCard;