import { useContext, memo } from 'react';
import PropTypes from 'prop-types';
import ShopItemsContext from '../../../context/ShopItemsContext';

const ShopItem = memo(({ item, name, price, image }) => {
  const { setCartItems } = useContext(ShopItemsContext);

  function addToCart() {
    setCartItems((prevItems) => [...prevItems, item]);
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = [...existingCartItems, item];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }

  return (
    <div className="item">
      <img loading='lazy' src={image} alt="product_image" />
      <div className="item_description">
        <p>{name}</p>
        <p>{price}$</p>
      </div>
      <button onClick={addToCart} className='add_to_cart_btn'><span>Add to Cart +</span></button>
    </div>
  );
})

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ShopItem;