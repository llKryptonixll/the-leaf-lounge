import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactHeader = () => {
  return (
    <section className='form_header_section'>
        <p className='main_header'>Contact Us</p>

        <div className='main_content_container'>
            <div className="textContainer">
                <p>Keep in touch with us</p>
                <p>
                    Stay connected with our plant shop for updates on new arrivals, gardening tips, and exclusive promotions. 
                    Join our mailing list today!
                </p>
            </div>
            <div className='contact_details_container'>
                <div className='detail_item_wrapper'>
                    <FontAwesomeIcon className='icon' icon={faPhoneAlt}/>
                    <div className='detail_text_wrapper'>
                        <span>Phone:</span>
                        <span>(+00) 987 877 821</span>
                        <span>Fax 678 912 1289 121</span>
                    </div>
                </div>
                <div className='detail_item_wrapper'>
                    <FontAwesomeIcon className='icon' icon={faHouse}/>
                    <div className='detail_text_wrapper'>
                        <span>Address:</span>
                        <span>123 Blossom Lane</span>
                        <span>Evergreen City, CA 98765</span>
                    </div>
                </div>
                <div className='detail_item_wrapper'>
                    <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                    <div className='detail_text_wrapper'>
                        <span>Email:</span>
                        <span>leaf-lounge@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactHeader