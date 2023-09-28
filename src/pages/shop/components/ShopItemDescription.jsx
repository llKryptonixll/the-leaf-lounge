import { useContext, memo } from "react";
import ShopItemsContext from '../../../context/ShopItemsContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ShopItemDescription = memo(({ isOpen, setIsOpen, currentItem }) => {

    const { addToCart, quantity, incrementQuantity, decrementQuantity } = useContext(ShopItemsContext);
    const { image, name, price } = currentItem;
    isOpen === true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";

    return (
        <div className={`${isOpen === true ? "description_isopen" : ""} item_description_container`}>
            <nav>
                <button aria-label="back-to-shop" onClick={() => setIsOpen(false)}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
            </nav>
            <div className="image_container">
                <img alt="product-image" src={image} loading="lazy"/>
            </div>
            <div className="content_container">
                <div className="header">
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Doloremque esse accusantium autem assumenda, fugiat aliquam! Autem voluptatibus laboriosam et eius.
                </div>
                <div className="quantity">
                    <p>QUANTITY</p>
                    <div className="counter_container">
                        <button onClick={decrementQuantity} aria-label="decrement-quantity">-</button>
                        <span>{quantity}</span>
                        <button onClick={incrementQuantity} aria-label="increment-quantity">+</button>
                    </div>
                </div>
                <div className="button_wrapper">
                    <button onClick={() => addToCart(currentItem)} className="add_to_cart_btn_2">Add to Cart +</button>
                </div>
            </div>

            <article className="detailed_description_container">
                <p className="sub_header">Description:</p>
                <p className="text_content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quae in quos laudantium totam soluta optio expedita quo. Consequatur, esse! Aperiam, optio repudiandae tenetur rerum sint at pariatur porro fugiat quod. Nam dolorum tempore praesentium mollitia, quibusdam porro vel possimus sint iusto rerum harum, maiores iure earum, repellat dolores perferendis.
                </p>
            </article>
        </div>
    )
})

export default ShopItemDescription