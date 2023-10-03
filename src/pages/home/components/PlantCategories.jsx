import { useContext } from 'react'
import { motion } from 'framer-motion'
import AnimationContext from '../../../context/AnimationContext'
import { Link } from 'react-router-dom'
import ShopFilterContext from '../../../context/ShopFilterContext'
import data from "../../../data.json"

const PlantCategories = () => {

  const { setSelectedCategory } = useContext(ShopFilterContext);
  const plants = data.plantsData;
  const { succulents, potter_plants, terrariums, small_plants, cactuses } = plants;

  const { textAnimation1, textAnimation2 } = useContext(AnimationContext);
  const largeImageAnimation = {
    initial: { opacity: 0, left: -60 },
    whileInView: { opacity: 1, left: 0 },
    transition: { duration: 0.5, delay: 0.3 },
    viewport: { once: true }
  }
  const smallImageContainerAniamtion = {
    initial: { opacity: 0, right: -60 },
    whileInView: { opacity: 1, right: 0 },
    transition: { duration: 0.5, delay: 0.3 },
    viewport: { once: true }
  }

  return (
    <section className='category_section'>
      <div className="header">
        <motion.p {...textAnimation1}>All kind of Plants</motion.p>
        <motion.p {...textAnimation2}>Discover Category</motion.p>
      </div>

      <div className='image_container'>
        <motion.div {...largeImageAnimation} className='large_image_wrapper'>
          <img src="images/home-images/category_plant1.webp" alt="plant-category-image" />
          <Link onClick={() => setSelectedCategory("Small_Plants")} to={"/shop"} className='link'>Small Plants <sup>({small_plants.length})</sup></Link>
        </motion.div>

        <motion.div {...smallImageContainerAniamtion} className='small_image_container'>
          <div className='small_image_wrapper'>
            <img src="images/home-images/category_plant2.webp" alt="plant-category-image" />
            <Link onClick={() => setSelectedCategory("Succulents")} to={"/shop"} className='link'>Succulents <sup>({succulents.length})</sup></Link>
          </div>
          <div className='small_image_wrapper'>
            <img src="images/home-images/category_plant3.webp" alt="plant-category-image" />
            <Link onClick={() => setSelectedCategory("Potter_Plants")} to={"/shop"} className='link'>Potter Plants <sup>({potter_plants.length})</sup></Link>
          </div>
          <div className='small_image_wrapper'>
            <img src="images/home-images/category_plant4.webp" alt="plant-category-image" />
            <Link onClick={() => setSelectedCategory("Terrariums")} to={"/shop"} className='link'>Terrariums <sup>({terrariums.length})</sup></Link>
          </div>
          <div className='small_image_wrapper'>
            <img src="images/home-images/category_plant5.webp" alt="plant-category-image" />
            <Link onClick={() => setSelectedCategory("Cactuses")} to={"/shop"} className='link'>Cactuses <sup>({cactuses.length})</sup></Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PlantCategories