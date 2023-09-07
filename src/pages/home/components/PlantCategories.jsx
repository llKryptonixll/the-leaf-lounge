import { React, useContext} from 'react'
import { Link } from 'react-router-dom'
import ShopFilterContext from '../../../context/ShopFilterContext'

const PlantCategories = () => {

  const { selectedCategory, setSelectedCategory, allPlants, filteredPlants } = useContext(ShopFilterContext);

  return (
    <section className='category_section'>
      <div className="header">
        <p>All kind of Plants</p>
        <p>Discover Category</p>
      </div>

      <div className='image_container'>
        <div className='large_image_wrapper'>
          <img src="images/home-images/category_plant1.webp" alt="plant-category-image" />
          <Link onClick={() => setSelectedCategory("Small_Plants")} to={"/shop"} className='link'>Small Plants <sup>(7)</sup></Link>
        </div>

        <div className='small_image_container'>
          <div className='small_image_wrapper'>
            <img src="images/home-images/category_plant2.webp" alt="plant-category-image" />
            <Link onClick={() => setSelectedCategory("Succulents")} to={"/shop"} className='link'>Succulents <sup>(3)</sup></Link>
          </div>
          <div className='small_image_wrapper'>
            <img src="images/home-images/category_plant3.webp" alt="plant-category-image" />
            <Link onClick={() => setSelectedCategory("Potter_Plants")} to={"/shop"} className='link'>Potter Plants <sup>(4)</sup></Link>
          </div>
          <div className='small_image_wrapper'>
            <img src="images/home-images/category_plant4.webp" alt="plant-category-image" />
            <Link onClick={() => setSelectedCategory("Terrariums")} to={"/shop"} className='link'>Terrariums <sup>(1)</sup></Link>
          </div>
          <div className='small_image_wrapper'>
            <img src="images/home-images/category_plant5.webp" alt="plant-category-image" />
            <Link onClick={() => setSelectedCategory("Cactuses")} to={"/shop"} className='link'>Cactuses <sup>(3)</sup></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlantCategories