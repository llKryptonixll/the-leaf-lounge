import React from 'react'

const ShopItem = ({name, price, image}) => {
  return (
    <div className="item">
      <img src={image} alt="product_image" />
      <div className="item_description">
        <p>{name}</p>
        <p>{price}$</p>
      </div>
      <button className='add_to_cart_btn'><span>Add to Cart +</span></button>
    </div>
  )
}

export default ShopItem