import React from 'react'

 function ProductsCard() {
  return (
    <div>
      <div className='product_cart'>
        <figure>
          <img src={img} alt="item-img"/>
        </figure>
        <strong className='rating'></strong>
      </div>
    </div>
  )
}
export default ProductsCard;