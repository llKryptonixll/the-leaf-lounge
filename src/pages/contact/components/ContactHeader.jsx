import { useContext } from 'react'
import AnimationContext from '../../../context/AnimationContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactHeader = () => {
    const contactSpanAnimation = {
        initial: { opacity: 0, left: -40 },
        whileInView: { opacity: 1, left: 0 },
        transition: { duration: 0.5 },
        viewport: { once: true }
    }
    const usSpanAnimation = {
        initial: { opacity: 0, right: -100, top: 50, rotate: 100 },
        whileInView: { opacity: 1, right: 0, top: 0, rotate: 0 },
        transition: { duration: 0.5, delay: 0.2 },
        viewport: { once: true }
    }
    const iconAnimation = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true }
    }
    const { textAnimation1, textAnimation2 } = useContext(AnimationContext)
    return (
        <section className='form_header_section'>
            <p className='main_header'>
                <motion.span {...contactSpanAnimation}>Contact&nbsp;</motion.span>
                <motion.span {...usSpanAnimation}>Us</motion.span>
            </p>

            <div className='main_content_container'>
                <div className="textContainer">
                    <motion.p {...textAnimation1}>Keep in touch with us</motion.p>
                    <motion.p {...textAnimation2}>
                        Stay connected with our plant shop for updates on new arrivals, gardening tips, and exclusive promotions.
                        Join our mailing list today!
                    </motion.p>
                </div>
                <div className='contact_details_container'>
                    <motion.div {...iconAnimation} transition={{ duration: 0.5, delay: 0.4}} className='detail_item_wrapper'>
                        <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
                        <div className='detail_text_wrapper'>
                            <span>Phone:</span>
                            <span>(+00) 987 877 821</span>
                            <span>Fax 678 912 1289 121</span>
                        </div>
                    </motion.div>
                    <motion.div {...iconAnimation} transition={{ duration: 0.5, delay: 0.5}} className='detail_item_wrapper'>
                        <FontAwesomeIcon className='icon' icon={faHouse} />
                        <div className='detail_text_wrapper'>
                            <span>Address:</span>
                            <span>123 Blossom Lane</span>
                            <span>Evergreen City, CA 98765</span>
                        </div>
                    </motion.div>
                    <motion.div {...iconAnimation} transition={{ duration: 0.5, delay: 0.6}} className='detail_item_wrapper'>
                        <FontAwesomeIcon className='icon' icon={faEnvelope} />
                        <div className='detail_text_wrapper'>
                            <span>Email:</span>
                            <span>leaf-lounge@gmail.com</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactHeader