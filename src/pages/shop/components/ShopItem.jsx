import { useContext, memo, useState } from 'react';
import PropTypes from 'prop-types';
import ShopItemsContext from '../../../context/ShopItemsContext';

const ShopItem = memo(({ item, name, price, image, setIsOpen, setCurrentItem, quantity }) => {
  const { addToCart } = useContext(ShopItemsContext);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleImageClick() {
    setIsOpen(true);
    setCurrentItem(item)
  }

  const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  function disableButton() {
    return existingCartItems.some((existingItem) => existingItem.id === item.id);
  }

  return (
    <div className="item">
      {!isLoaded && <div className='image_loader'></div>}
      <img
        onLoad={() => setIsLoaded(true)}
        onClick={handleImageClick}
        loading='lazy'
        src={image}
        alt="product_image"
      />
      <div className='item_text_wrapper'>
        {isLoaded && (
          <>
            <div className="item_description">
              <p>{name}</p>
              <p>{price}$</p>
            </div>
            <div className='button_wrapper'>
              <button
                disabled={disableButton()}
                onClick={() => addToCart(item, quantity)}
              >
                {disableButton() ? "Already in Cart!" : "Add to Cart +"}
              </button>
            </div>
          </>
        )}
        {!isLoaded && (
          <div className='text_loader'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
});

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ShopItem;