import { useContext} from 'react'
import { Link } from 'react-router-dom'
import ShopFilterContext from '../../../context/ShopFilterContext'
import data from "../../../data.json"

const PlantCategories = () => {

  const { setSelectedCategory } = useContext(ShopFilterContext);
  const plants = data.plantsData
  const { succulents, potter_plants, terrariums, small_plants, cactuses } = plants;

  return (
    <section className='category_section'>
      <div className="header">
        <p>All kind of Plants</p>
        <p>Discover Category</p>
      </div>

      <div className='image_container'>
        <div className='large_image_wrapper'>
          <img src="images/home-images/category_plant1.webp" alt="plant-category-image" />
          <Link onClick={() => setSelectedCategory("Small_Plants")} to={"/shop"} className='link'>Small Plants <sup>({small_plants.length})</sup></Link>
        </div>

        <div className='small_image_container'>
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
        </div>
      </div>
    </section>
  )
}

export default PlantCategories