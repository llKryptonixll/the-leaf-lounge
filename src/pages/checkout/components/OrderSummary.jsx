import { useContext } from 'react'
import ShopItemsContext from '../../../context/ShopItemsContext'
import ProductItem from './ProductItem'

const OrderSummary = () => {

    const { cartItems } = useContext(ShopItemsContext)
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };
    const totalCartPrice = calculateTotalPrice();

    return (
        <section className='order_summary_section'>
            <div className='wrapper'>
                <p className="header">Order Summary</p>
                <ul className='products_list'>
                    {cartItems.map((item) => {
                        return (
                            <ProductItem
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                quantity={item.quantity}
                                totalCartPrice={totalCartPrice}
                            />
                        )
                    })}
                </ul>
            </div>
            <div className="total_price">
                <p>Total</p>
                <p>${totalCartPrice}</p>
            </div>
        </section>
    )
}

export default OrderSummary