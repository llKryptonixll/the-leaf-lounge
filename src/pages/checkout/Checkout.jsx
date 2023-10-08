import PaymentForm from './components/PaymentForm'
import OrderSummary from './components/OrderSummary'

const Checkout = () => {
    return (
        <main className='main_checkout'>
            <PaymentForm />
            <OrderSummary />
        </main>
    )
}

export default Checkout