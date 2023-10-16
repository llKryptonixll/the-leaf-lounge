import { useContext, memo } from "react";
import PropTypes from 'prop-types';
import ShopItemsContext from '../../../context/ShopItemsContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ShopItemDescription = memo(({ isOpen, setIsOpen, currentItem }) => {

    const { addToCart, quantity, incrementQuantity, decrementQuantity } = useContext(ShopItemsContext);
    const { image, name, price, small_description, large_description } = currentItem;
    isOpen === true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";
    
    return (
        <div className={`${isOpen === true ? "description_isopen" : ""} item_description_container`}>
            <nav>
                <button aria-label="back-to-shop" onClick={() => setIsOpen(false)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
            </nav>
            <div className="image_container">
                <img alt="product-image" src={image} loading="lazy" />
            </div>
            <div className="content_container">
                <div className="header">
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
                <div className="description">{small_description}</div>
                <div className="quantity">
                    <p>QUANTITY</p>
                    <div className="counter_container">
                        <button onClick={decrementQuantity} aria-label="decrement-quantity">-</button>
                        <span>{quantity}</span>
                        <button onClick={incrementQuantity} aria-label="increment-quantity">+</button>
                    </div>
                </div>
                <div className="button_wrapper">
                    <button disabled={currentItem.in_stock === false} onClick={() => addToCart(currentItem)} className="add_to_cart_btn_2">
                        {currentItem.in_stock === false ? "Out of Stock" : "Add to Cart +"}
                    </button>
                </div>
            </div>

            <article className="detailed_description_container">
                <p className="sub_header">Description:</p>
                <p className="text_content">{large_description}</p>
            </article>
        </div>
    )
})

ShopItemDescription.displayName = 'ShopItemDescription';

ShopItemDescription.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    currentItem: PropTypes.object.isRequired
};

export default ShopItemDescription