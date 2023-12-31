import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"
import { faX } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ productId, handleItemDelete, productName, productPrice, productImage, productQuantity }) => {

  return (
    <li>
      <div className="item_content">
        <img src={productImage} height={"80px"} width={"100px"} alt="product-image" />
        <div className="item_information">
          <p>{productName}</p>
          <p>Qty: {productQuantity}</p>
          <span>${productPrice}</span>
        </div>
      </div>
      <button onClick={() => handleItemDelete(productId)} aria-label="remove-current-product-from-cart">
        <FontAwesomeIcon className="remove_item_icon" icon={faX} />
      </button>
    </li>
  )
}

CartItem.propTypes = {
  productId: PropTypes.string,
  handleItemDelete: PropTypes.func,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  productQuantity: PropTypes.number.isRequired
}

export default CartItem;