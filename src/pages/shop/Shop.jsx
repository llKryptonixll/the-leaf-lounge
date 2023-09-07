import { React, useContext } from 'react'
import ShopItem from './components/ShopItem'
import { v4 as uuidv4 } from 'uuid';
import ShopFilterContext from '../../context/ShopFilterContext';

const Shop = () => {

  const { selectedCategory, setSelectedCategory, allPlants, filteredPlants } = useContext(ShopFilterContext);

  return (
    <main className='main_shop'>
      <section className="shop_section">
        <p className='header'>Shop</p>
        <nav className='shop_filter'>
          <ul className='filter_list'>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("All")} className={selectedCategory === "All" ? "activeButton": ""}>All</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("Succulents")} className={selectedCategory === "Succulents" ? "activeButton": ""}>Succulents</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("Potter_Plants")} className={selectedCategory === "Potter_Plants" ? "activeButton": ""}>Potter Plants</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("Terrariums")} className={selectedCategory === "Terrariums" ? "activeButton": ""}>Terrariums</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("Small_Plants")} className={selectedCategory === "Small_Plants" ? "activeButton": ""}>Small Plants</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("Cactuses")} className={selectedCategory === "Cactuses" ? "activeButton": ""}>Cactuses</button>
            </li>
          </ul>
        </nav>

        <div className="shop_items_container">
          {filteredPlants.map((plant) => {
            return (
              <ShopItem 
                key={uuidv4()}
                name={plant.name}
                price={plant.price}
                image={plant.image}
              />
            ) 
          })}
        </div>
      </section>
    </main>
  )
}

export default Shop