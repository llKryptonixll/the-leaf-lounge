import PropTypes from "prop-types"

const ProductItem = ({ name, price, image, quantity }) => {
    return (
        <li className='product_item'>
            <div className="main_content_container">
                <img width={"100px"} height={"80px"} src={image} alt="" />
                <div className="description_wrapper">
                    <p className="name">{name}</p>
                    <p className="price">${price}</p>
                </div>
                <p className="quantity">{quantity}</p>
            </div>
            <p className='subtotal_price'>${quantity * price}</p>
        </li>
    )
}

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default ProductItem