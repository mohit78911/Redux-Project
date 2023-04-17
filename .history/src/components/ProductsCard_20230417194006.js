import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slice/cartSlice";
import { wishItems } from "../store/slice/wishlist";

function ProductsCard(props) {
  const { img, rating, title, price } = props;

  const [isAdded, setIsAdded] = useState(false);
const [isWished,setIsWished]=useState(false)
  const dispatch = useDispatch();

  const handleAddToCart = () => { 
    const item = { ...props };
    dispatch(addItem(item));
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  const handleWishList = () =>{
    const item = { ...props };

    dispatch(wishItems(item))
    setIsWished(true)
  }
  return (
    <div>
      <div className="product_card">
        <figure>
          <img src={img} alt="item-img" />
        <img src={img} alt="wish-list"/>
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
        <button className="btn" onClick={handleWishList}>Wishlist</button>

      </div>
    </div>
  );
}
export default ProductsCard;
