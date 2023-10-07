import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal, faApplePay } from '@fortawesome/free-brands-svg-icons'

const PaymentForm = () => {
    return (
        <section className='payment_section'>
            <form className='payment_form' action="">
                <p className="header">Payment</p>
                <div className="pay_with_container">
                    <p>Pay with</p>
                    <div className="button_wrapper">
                        <button type='button' className='paypal_btn' aria-label='pay-with-PayPal'>
                            <FontAwesomeIcon className='icon' icon={faPaypal} />
                        </button>
                        <button type='button' className='apple_pay_btn' aria-label='pay-with-ApplePay'>
                            <FontAwesomeIcon className='icon' icon={faApplePay} />
                        </button>
                    </div>
                    <p className='or_pay_with'>or pay with card</p>
                </div>
                <div className="form_content_wrapper">
                    <div className="card_type">
                        <p className='title'>Supported Cards</p>
                        <div className='card_types_container'>
                            <div className="image_wrapper">
                                <img width={"30px"} height={"10px"} src="images/visa_logo.png" alt="visa-credit-card-logo" />
                            </div>
                            <div className="image_wrapper">
                                <img width={"20px"} height={"10px"} src="images/mastercard_logo.png" alt="master-card-credit-card-logo" />
                            </div>
                        </div>
                    </div>
                    <div className="input_wrapper">
                        <p className="sub_header">Card Details</p>
                        <div className="input_container">
                            <label htmlFor="name">Name</label>
                            <input placeholder='e.g. Lucas Cerri' name='name' className='large_input' type="text" />
                        </div>
                        <div className="input_container">
                            <label htmlFor="card_number">Card Number</label>
                            <input placeholder='e.g. 1234 5678 9112 3456' name='card_number' className='large_input' type="text" />
                        </div>

                        <div className="small_input_container">
                            <div className="input_container">
                                <label htmlFor="expiration_date">Expiration Date</label>
                                <input placeholder='e.g. 12 / 99' name='expiration_date' className='small_input' type="text" />
                            </div>
                            <div className="input_container">
                                <label htmlFor="security_code">Security Code</label>
                                <input placeholder='e.g. 167' name='securitiy_code' className='small_input' type="text" />
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='form_submit_button'>Pay Now</button>
                </div>
            </form>
        </section>
    )
}

export default PaymentForm