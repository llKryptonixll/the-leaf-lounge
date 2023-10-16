import { useContext, memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ShopItemsContext from '../../../context/ShopItemsContext';

const ShopItem = memo(({ item, name, price, image, setIsOpen, setCurrentItem, quantity, inStock }) => {
  const { addToCart } = useContext(ShopItemsContext);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleImageClick() {
    setIsOpen(true);
    setCurrentItem(item)
  }

  const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  function disableButton() {
    if (existingCartItems.some((existingItem) => existingItem.id === item.id) || inStock === false) {
      return true
    }
  }

  return (
    <div className="item">
      <div className='image_wrapper'>
        {!isLoaded && <div className='image_loader'></div>}
        <img
          onLoad={() => setIsLoaded(true)}
          onClick={handleImageClick}
          loading='lazy'
          src={image}
          alt="product_image"
        />
        <button
          className='quick_view_button'
          onClick={handleImageClick}
          aria-label='quick-view'
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <div className='info_container'>
          {!inStock && <span>Out of Stock</span>}
        </div>
      </div>
      <div className='item_text_wrapper'>
        {isLoaded && (
          <>
            <div className="item_description">
              <p>{name}</p>
              <p>${price}</p>
            </div>
            <div className='button_wrapper'>
              <button
                disabled={disableButton()}
                onClick={() => addToCart(item, quantity)}
              >
                {inStock ? (disableButton() ? "Already in Cart!" : "Add to Cart +") : "Out of Stock"}
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

ShopItem.displayName = 'ShopItemDescription';

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  setCurrentItem: PropTypes.func.isRequired,
  quantity: PropTypes.number,
};

export default ShopItem;