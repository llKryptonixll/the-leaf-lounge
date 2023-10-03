import { useContext } from 'react';
import AnimationContext from '../../../context/AnimationContext';
import { motion } from 'framer-motion';

const TopTrending = () => {
  const img_1_3_GeneralAnimation = {
    transition: { duration: 0.5, delay: 0.3 },
    viewport: { once: true }
  }
  const img_2_GeneralAnimation = {
    transition: { duration: 0.5, delay: 0.5 },
    viewport: { once: true }
  }
  const iconAnimation = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true }
  }
  const { textAnimation1, textAnimation2 } = useContext(AnimationContext);

  return (
    <section className='trending_section'>
      <div className="products_container">
        <div className="header">
          <motion.p {...textAnimation1} className="subheader">Free Shipping</motion.p>
          <motion.p {...textAnimation2} className="main_header">Top Trending Plants</motion.p>
        </div>
        <div className='image_container'>
          <motion.img {...img_1_3_GeneralAnimation} initial={{opacity: 0, left: -80}} whileInView={{opacity: 1, left: 0}} src="images/home-images/hero-plant1.webp" alt="product_image" />
          <motion.img {...img_2_GeneralAnimation} initial={{opacity:0, scale: 0.5}} whileInView={{opacity: 1, scale: 1}} src="images/home-images/hero-plant2.webp" alt="product_image" />
          <motion.img {...img_1_3_GeneralAnimation} initial={{opacity: 0, right: -80}} whileInView={{opacity: 1, right: 0}} src="images/home-images/hero-plant3.webp" alt="product_image" />
        </div>
      </div>

      <div className="icons_container">
        <motion.div {...iconAnimation} transition={{ duration: 0.5, delay: 0.6}} className="icon_wrapper">
          <img src="images/home-images/plant_icon1.webp" alt="icon" />
          <div className="text-container">
            <p>Smart Plant & Tree Care</p>
            <p>Transform plant care with Smart Plant & Tree Care technology.</p>
          </div>
        </motion.div>
        <motion.div {...iconAnimation} transition={{ duration: 0.5, delay: 0.8}} className="icon_wrapper">
          <img src="images/home-images/plant_icon2.webp" alt="icon" />
          <div className="text-container">
            <p>Nursery Direct</p>
            <p>Experience the convenience of Nursery Direct, your direct source for plants.</p>
          </div>
        </motion.div>
        <motion.div {...iconAnimation} transition={{ duration: 0.5, delay: 1}} className="icon_wrapper">
          <img src="images/home-images/plant_icon3.webp" alt="icon" />
          <div className="text-container">
            <p>Plant Sentry</p>
            <p>Ensure plant health and compliance with Plant Sentry&apos;s comprehensive monitoring.</p>
          </div>
        </motion.div>
        <motion.div {...iconAnimation} transition={{ duration: 0.5, delay: 1.2}} className="icon_wrapper">
          <img src="images/home-images/plant_icon4.webp" alt="icon" />
          <div className="text-container">
            <p>Plant Renovation</p>
            <p>Revitalize your plants with Plant Renovation, restoring their vitality.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TopTrending