import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {
  const subHeaderAnimation = {
    initial: { opacity: 0, top: -30 },
    whileInView: { opacity: 1, top: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  }
  const headerAnimation = {
    initial: { opacity: 0, top: -60 },
    whileInView: { opacity: 1, top: 0 },
    transition: { duration: 0.5, delay: 0.2 },
    viewport: { once: true }
  }
  const mainTextAnimation = {
    initial: { opacity: 0, top: -60 },
    whileInView: { opacity: 1, top: 0 },
    transition: { duration: 0.5, delay: 0.3 },
    viewport: { once: true }
  }
  const shopNowBtnAnimation = {
    initial: { opacity: 0, right: -100, rotate: -10 },
    whileInView: { opacity: 1, right: 0, rotate: 0 },
    transition: { duration: 0.5, delay: 0.4 },
    viewport: { once: true }
  }
  const sliderFadeInAnimation = {
    initial: { opacity: 0, right: -400, rotate: 10, zIndex: 2 },
    whileInView: { opacity: 1, right: 0, rotate: 0},
    transition: { duration: 0.5, delay: 0.5 },
    viewport: { once: true }
  }

  return (
    <section className='hero_section'>
      <article className='hero_article'>
        <div className='text-wrapper'>
          <motion.p {...subHeaderAnimation} className='sub_header'>
            TAKE A PLANT
          </motion.p>
          <motion.h1 {...headerAnimation}>
            Get 20% Off
            Order Now
          </motion.h1>
          <motion.p {...mainTextAnimation} className='main_text'>
            Looking to enhance your indoor or outdoor space with vibrant foliage and captivating blooms?
            Look no further than our premium plant shop!
            For a limited time only, we&apos;re thrilled to offer an exclusive discount of 20% off on all orders.
            Don&apos;t miss out on this incredible opportunity to cultivate your very own green oasis at unbeatable prices.
          </motion.p>
        </div>

        <motion.div style={{ position: "relative" }} {...shopNowBtnAnimation}>
          <Link to={"/shop"} className='shop_now_btn'>SHOP NOW<FontAwesomeIcon className='cart_icon' icon={faCartShopping} /></Link>
        </motion.div>

      </article>

      <motion.div {...sliderFadeInAnimation} className='image_slide_container'>
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
      </motion.div>
    </section>
  )
}

export default HeroSection