import { useContext, useState } from 'react'
import ShopItem from './components/ShopItem'
import ShopItemDescription from './components/ShopItemDescription';
import ShopFilterContext from '../../context/ShopFilterContext';

const Shop = () => {

  const { selectedCategory, setSelectedCategory, filteredPlants } = useContext(ShopFilterContext);
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  return (
    <main className='main_shop'>
      <section className="shop_section">
        <p className='header'>Shop</p>
        <nav className='shop_filter'>
          <ul className='filter_list'>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("All")} className={selectedCategory === "All" ? "activeButton" : ""}>All</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("Succulents")} className={selectedCategory === "Succulents" ? "activeButton" : ""}>Succulents</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("Potter_Plants")} className={selectedCategory === "Potter_Plants" ? "activeButton" : ""}>Potter Plants</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("Terrariums")} className={selectedCategory === "Terrariums" ? "activeButton" : ""}>Terrariums</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("Small_Plants")} className={selectedCategory === "Small_Plants" ? "activeButton" : ""}>Small Plants</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setSelectedCategory("Cactuses")} className={selectedCategory === "Cactuses" ? "activeButton" : ""}>Cactuses</button>
            </li>
          </ul>
        </nav>

        <div className="shop_items_container">
          {filteredPlants.map((plant) => {
            return (
              <ShopItem
                key={plant.id}
                item={plant}
                id={plant.id}
                name={plant.name}
                price={plant.price}
                image={plant.image}
                inStock={plant.in_stock}
                setIsOpen={setIsOpen}
                setCurrentItem={setCurrentItem}
              />
            )
          })}
        </div>
        <ShopItemDescription
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentItem={currentItem}
        />
      </section>
    </main>
  )
}

export default Shop