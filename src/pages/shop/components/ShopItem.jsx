import React from 'react'

const shopItem = ({name, price, image}) => {
  return (
    <div className="item">
        <img src={image} alt="product_image" />
        <div className="item_description">
          <p>{name}</p>
          <p>{price}$</p>
        </div>
    </div>
  )
}

export default shopItem