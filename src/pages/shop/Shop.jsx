import { React, useState } from 'react'

const Shop = () => {

  const [activeButton, setActiveButton] = useState("All");

  return (
    <main className='main_shop'>
      <section className="shop_section">
        <p className='header'>Shop</p>

        <nav className='shop_filter'>
          <ul className='filter_list'>
            <li className='filter_item'>
              <button onClick={() => setActiveButton("All")} className={activeButton === "All" ? "activeButton": ""}>All</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setActiveButton("Succulents")} className={activeButton === "Succulents" ? "activeButton": ""}>Succulents</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setActiveButton("Potter_Plants")} className={activeButton === "Potter_Plants" ? "activeButton": ""}>Potter Plants</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setActiveButton("Terrariums")} className={activeButton === "Terrariums" ? "activeButton": ""}>Terrariums</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setActiveButton("Small_Plants")} className={activeButton === "Small_Plants" ? "activeButton": ""}>Small Plants</button>
            </li>
            <li className='filter_item'>
              <button onClick={() => setActiveButton("Cactuses")} className={activeButton === "Cactuses" ? "activeButton": ""}>Cactuses</button>
            </li>
          </ul>
        </nav>

        <div className="shop_items_container">
          <div className="item">
            <img src="images/shop-images/cactuses/1.jpg" alt="" />
            <div className="item_description">
              <p>Cool Plant</p>
              <p>$79.00</p>
            </div>
          </div>
          <div className="item">
            <img src="images/shop-images/cactuses/2.jpg" alt="" />
            <div className="item_description">
              <p>Cool Plant</p>
              <p>$79.00</p>
            </div>
          </div>
          <div className="item">
            <img src="images/shop-images/cactuses/3.jpg" alt="" />
            <div className="item_description">
              <p>Cool Plant</p>
              <p>$79.00</p>
            </div>
          </div>
          <div className="item">
            <img src="images/shop-images/cactuses/1.jpg" alt="" />
            <div className="item_description">
              <p>Cool Plant</p>
              <p>$79.00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shop