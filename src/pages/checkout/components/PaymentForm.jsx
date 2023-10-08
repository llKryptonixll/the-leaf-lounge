import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal, faApplePay } from '@fortawesome/free-brands-svg-icons'

const PaymentForm = () => {

    const inputErrorStyles = {
        backgroundColor: "#FF4D4D",
        outline: "none"
    }
    const errorMessageStyles = {
        fontWeight: 600,
        fontSize: "0.9rem"
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className='payment_section'>
            <form className='payment_form' action="" onSubmit={handleSubmit(onSubmit)}>
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
                            <label htmlFor="name">Name*</label>
                            <input
                                style={errors.name && { ...inputErrorStyles }}
                                {...register("name", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[^\d]+$/,
                                        message: "Can not contain numbers"
                                    }
                                })}
                                placeholder='e.g. Lucas Cerri'
                                name='name'
                                className='large_input'
                                type="text"
                            />
                            {errors.name && <span style={{ ...errorMessageStyles }}>{errors.name.message}</span>}

                        </div>
                        <div className="input_container">
                            <label htmlFor="card_number">Card Number*</label>
                            <input
                                style={errors.card_number && { ...inputErrorStyles }}
                                {...register("card_number", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)(?:\d{4})/,
                                        message: "Please provide a valid card number"
                                    }
                                })}
                                placeholder='e.g. 4111 1111 1111 1111'
                                name='card_number'
                                className='large_input'
                                type="text"
                            />
                            {errors.card_number && <span style={{ ...errorMessageStyles }}>{errors.card_number.message}</span>}
                        </div>

                        <div className="small_input_container">
                            <div className="input_container">
                                <label htmlFor="expiration_date">Expiration Date*</label>
                                <input
                                    style={errors.expiration_date && { ...inputErrorStyles }}
                                    {...register("expiration_date", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/,
                                            message: "Enter a write format: MM / YY or MM/YY"
                                        }
                                    })}
                                    placeholder='e.g. 12 / 25'
                                    name='expiration_date'
                                    className='small_input'
                                    type="text"
                                />
                                {errors.expiration_date && <span style={{ ...errorMessageStyles }}>{errors.expiration_date.message}</span>}
                            </div>
                            <div className="input_container">
                                <label htmlFor="security_code">Security Code*</label>
                                <input
                                    style={errors.securitiy_code && { ...inputErrorStyles }}
                                    {...register("securitiy_code", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^[0-9]{3,4}$/,
                                            message: "Security code is invalid"
                                        }
                                    })}
                                    placeholder='e.g. 167'
                                    name='securitiy_code'
                                    className='small_input'
                                    type="text"
                                />
                                {errors.securitiy_code && <span style={{ ...errorMessageStyles }}>{errors.securitiy_code.message}</span>}
                            </div>
                        </div>

                        <p className='sub_header'>Billing Details</p>

                        <div className="small_input_container">
                            <div className="input_container">
                                <label htmlFor="first_name">First Name*</label>
                                <input
                                    style={errors.first_name && { ...inputErrorStyles }}
                                    {...register("first_name", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^[^\d]+$/,
                                            message: "Can not contain numbers"
                                        }
                                    })}
                                    placeholder='e.g. Lucas'
                                    name='first_name'
                                    className='small_input'
                                    type="text"
                                />
                                {errors.first_name && <span style={{ ...errorMessageStyles }}>{errors.first_name.message}</span>}
                            </div>
                            <div className="input_container">
                                <label htmlFor="last_name">Last Name*</label>
                                <input
                                    style={errors.last_name && { ...inputErrorStyles }}
                                    {...register("last_name", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^[^\d]+$/,
                                            message: "Can not contain numbers"
                                        }
                                    })}
                                    placeholder='e.g. Cerri'
                                    name='last_name'
                                    className='small_input'
                                    type="text"
                                />
                                {errors.last_name && <span style={{ ...errorMessageStyles }}>{errors.last_name.message}</span>}
                            </div>
                        </div>
                        <div className="input_container">
                            <label htmlFor="country">Country*</label>
                            <input
                                style={errors.country && { ...inputErrorStyles }}
                                {...register("country", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[^\d]+$/,
                                        message: "Can not contain numbers"
                                    }
                                })}
                                placeholder='e.g. Germany'
                                name='country'
                                className='large_input'
                                type="text"
                            />
                            {errors.country && <span style={{ ...errorMessageStyles }}>{errors.country.message}</span>}
                        </div>
                        <div className="input_container">
                            <label htmlFor="street_address">Street Address*</label>
                            <input
                                style={errors.street_address && { ...inputErrorStyles }}
                                {...register("street_address", {
                                    required: "This field is required",
                                })}
                                placeholder='House number and street name'
                                name='street_address'
                                className='large_input'
                                type="text"
                            />
                            {errors.street_address && <span style={{ ...errorMessageStyles }}>{errors.street_address.message}</span>}

                        </div>
                        <div className="input_container">
                            <input
                                placeholder='e.g. Apartment, suite, unit etc. (optional)'
                                name='street_address'
                                className='large_input'
                                type="text"
                            />
                        </div>
                        <div className="input_container">
                            <label htmlFor="town">Town / City*</label>
                            <input
                                style={errors.town && { ...inputErrorStyles }}
                                {...register("town", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[^\d]+$/,
                                        message: "Can not contain numbers"
                                    }
                                })}
                                placeholder='e.g. Bitburg'
                                name='town'
                                className='large_input'
                                type="text"
                            />
                            {errors.town && <span style={{ ...errorMessageStyles }}>{errors.town.message}</span>}
                        </div>
                        <div className="small_input_container">
                            <div className="input_container">
                                <label htmlFor="phone">Phone*</label>
                                <input
                                    style={errors.phone && { ...inputErrorStyles }}
                                    {...register("phone", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^\d+$/,
                                            message: "Please enter only numbers"
                                        }
                                    })}
                                    placeholder='e.g. (555) 555-5555'
                                    name='phone'
                                    className='small_input'
                                    type="text"
                                />
                                {errors.phone && <span style={{ ...errorMessageStyles }}>{errors.phone.message}</span>}
                            </div>
                            <div className="input_container">
                                <label htmlFor="email_address">Email Address*</label>
                                <input
                                    style={errors.email_address && { ...inputErrorStyles }}
                                    {...register("email_address", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Please enter a write email"
                                        }
                                    })}
                                    placeholder='e.g. lucas@mail.com'
                                    name='email_address'
                                    className='small_input'
                                    type="text"
                                />
                                {errors.email_address && <span style={{ ...errorMessageStyles }}>{errors.email_address.message}</span>}
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