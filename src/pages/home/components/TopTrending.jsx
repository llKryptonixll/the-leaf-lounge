import React from 'react'

const TopTrending = () => {
  return (
    <section className='trending_section'>
      <div className="products_container">
        <div className="header">
          <p className="subheader">Free Shipping</p>
          <p className="main_header">Top Trending Plants</p>
        </div>
        <div className='image_container'>
          <img src="images/home-images/hero-plant1.jpg" alt="product_image" />
          <img src="images/home-images/hero-plant2.jpg" alt="product_image" />
          <img src="images/home-images/hero-plant3.jpg" alt="product_image" />
        </div>
      </div>

      <div className="icons_container">
        <div className="icon_wrapper">
          <img src="images/home-images/plant_icon1.png" alt="icon" />
          <div className="text-container">
            <p>Smart Plant & Tree Care</p>
            <p>Transform plant care with Smart Plant & Tree Care technology.</p>
          </div>
        </div>
        <div className="icon_wrapper">
          <img src="images/home-images/plant_icon2.png" alt="icon" />
          <div className="text-container">
            <p>Nursery Direct</p>
            <p>Experience the convenience of Nursery Direct, your direct source for plants.</p>
          </div>
        </div>
        <div className="icon_wrapper">
          <img src="images/home-images/plant_icon3.png" alt="icon" />
          <div className="text-container">
            <p>Plant Sentry</p>
            <p>Ensure plant health and compliance with Plant Sentry's comprehensive monitoring.</p>
          </div>
        </div>
        <div className="icon_wrapper">
          <img src="images/home-images/plant_icon4.png" alt="icon" />
          <div className="text-container">
            <p>Plant Renovation</p>
            <p>Revitalize your plants with Plant Renovation, restoring their vitality.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopTrending