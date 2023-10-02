import CartItem from "./CartItem";
import PropTypes from "prop-types"
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ShopItemsContext from "../../context/ShopItemsContext";

const CartModal = ({ cartIsOpen, setCartIsOpen }) => {
  const { cartItems, setCartItems } = useContext(ShopItemsContext);

  function handleItemDelete(productId) {
    const newItems = cartItems.filter((item) => item.id !== productId)
    setCartItems(newItems)
    localStorage.setItem('cartItems', JSON.stringify(newItems))
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  const totalCartPrice = calculateTotalPrice();

  return (
    <div className={`black_page_layer ${cartIsOpen === true ? "" : "removeBlackPageLayer"}`}>
      <aside className={`cart_container ${cartIsOpen === true ? "openCart" : ""}`}>
        <button onClick={() => setCartIsOpen(false)} className="close_cart_btn" aria-label="close-shopping-cart">
          <FontAwesomeIcon icon={faX} />
        </button>
        <ul className="cart_items_list">
          {cartItems.length === 0 ? <li className="no_items_added_msg">No items added</li> : (
            cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  productId={item.id}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                  productName={item.name}
                  productPrice={item.price * item.quantity}
                  productImage={item.image}
                  productQuantity={item.quantity}
                  handleItemDelete={handleItemDelete}
                />
              );
            })
          )}
        </ul>
        <div className="cart_bottom_container">
          <div className="total_price_wrapper">
            <p className="sub_header">Total:</p>
            <span className="price">${totalCartPrice}</span>
          </div>
          <button className="checkout_button">
            CHECK OUT
          </button>
        </div>
      </aside>
    </div>
  )
}

CartModal.propTypes = {
  cartIsOpen: PropTypes.bool.isRequired,
  setCartIsOpen: PropTypes.func.isRequired
}

export default CartModal