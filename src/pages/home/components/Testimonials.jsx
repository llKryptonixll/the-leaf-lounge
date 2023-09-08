import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {

  const pagination = {
    clickable: true
  };

  return (
    <section className='testimonial_section'>
      <Swiper pagination={pagination} modules={[Pagination]} className="slide_container">
        <SwiperSlide className='slide_item'>
          <div className='star_rating_container'>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
          </div>
          <p className='rating_text'>
            "The Leaf Lounge is a plant lover's dream come true! 
            Their impeccable selection and knowledgeable staff have helped me create a stunning green oasis in my home. 
            I highly recommend them for their top-notch plants and exceptional service."
          </p>
          <div className='person_details_container'>
            <img src="images/home-images/testimonial_1.webp" alt="female-person" />
            <p>Sarah Montgomery</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide_item'>
          <div className='star_rating_container'>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
          </div>
          <p className='rating_text'>
            "The Leaf Lounge is my go-to destination for all things green. 
            Their wide variety of healthy and vibrant plants never fails to impress me. 
            The staff is friendly, and their expertise has been invaluable in helping me choose the perfect plants for my space. 
            The Leaf Lounge is a true gem for plant enthusiasts!"
          </p>
          <div className='person_details_container'>
            <img src="images/home-images/testimonial_2.webp" alt="female-person" />
            <p>Emma Thompson</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide_item'>
          <div className='star_rating_container'>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
            <FontAwesomeIcon className='star_icon' icon={faStar}/>
          </div>
          <p className='rating_text'>
            "I can't say enough good things about The Leaf Lounge. 
            The quality of their plants is unmatched, and their prices are reasonable. 
            Whether you're a seasoned plant lover or a beginner, their staff will guide you in finding the perfect plants to brighten up your home. 
            The Leaf Lounge is my one-stop shop for all my gardening needs!"
          </p>
          <div className='person_details_container'>
            <img src="images/home-images/testimonial_3.webp" alt="male-person" />
            <p>Mark Davis</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials