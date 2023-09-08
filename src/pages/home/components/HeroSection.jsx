import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {
  return (
    <section className='hero_section'>
      <article className='hero_article'>
        <div className='text-wrapper'>
          <p className='sub_header'>TAKE A PLANT</p>
          <h1>
            Get 20% Off 
            Order Now
          </h1>
          <p className='main_text'>
            Looking to enhance your indoor or outdoor space with vibrant foliage and captivating blooms? 
            Look no further than our premium plant shop! 
            For a limited time only, we&apos;re thrilled to offer an exclusive discount of 20% off on all orders. 
            Don&apos;t miss out on this incredible opportunity to cultivate your very own green oasis at unbeatable prices.
          </p>
        </div>

        <Link to={"/shop"} className='shop_now_btn'>SHOP NOW<FontAwesomeIcon className='cart_icon' icon={faCartShopping} /></Link>

      </article>

      <Swiper className="image_slider"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className='image_item'>
          <img src="images/home-images/hero-plant4.webp" alt="plant-image" />
        </SwiperSlide>
        <SwiperSlide className='image_item'>
          <img src="images/home-images/hero-plant1.webp" alt="plant-image" />
        </SwiperSlide>
        <SwiperSlide className='image_item'>
          <img src="images/home-images/hero-plant2.webp" alt="plant-image" />
        </SwiperSlide>
        <SwiperSlide className='image_item'>
          <img src="images/home-images/hero-plant3.webp" alt="plant-image" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HeroSection