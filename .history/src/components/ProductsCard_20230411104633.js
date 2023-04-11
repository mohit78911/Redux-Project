import React from 'react'

 function ProductsCard() {
  return (
    <div>
      <div className='product_cart'>
        <figure>
          <img src={img} alt="item-img"/>
        </figure>
        <strong className='rating'>111</strong>
        <h4 className='title'>hello</h4>
        <h3 className='price'></h3>
      </div>
    </div>
  )
}
export default ProductsCard;