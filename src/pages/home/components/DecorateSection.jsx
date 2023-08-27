import React from 'react'

const DecorateSection = () => {
  return (
    <section className="decorate_section">
      <article className='article_container'>
        <div className="text_wrapper">
          <h2 className='header'>
            Decorate your home <span>with plants</span>
          </h2>
          <p className='text'>
            Transform your living space into a vibrant oasis by adorning it with lush green plants, adding a touch of natural beauty and a breath of fresh air to your home decor. 
            With their serene presence and countless benefits, plants bring life and tranquility to any room, creating a harmonious environment that soothes the mind and invigorates the soul.
          </p>
        </div>    

        <ul className='icon_text_list'>
          <li className='list_item'>
            <div className='icon_wrapper'>
              <img src="images/home-images/quality_icon.webp" alt="quality-icon" />
            </div>
            <div className='content_wrapper'>
              <p>Unbeatable quality</p>
              <p>Our products boast an unbeatable quality that sets them apart from the competition.</p>
            </div>
          </li>
          <li className='list_item'>
            <div className='icon_wrapper'>
              <img src="images/home-images/delivery_icon.webp" alt="delivery-icon" />
            </div>
            <div className='content_wrapper'>
              <p>Fast delivery to your door</p>
              <p>Enjoy fast door-to-door delivery for your convenience.</p>
            </div>
          </li>
          <li className='list_item'>
            <div className='icon_wrapper'>
              <img src="images/home-images/plant_icon.webp" alt="plant-icon" />
            </div>
            <div className='content_wrapper'>
              <p>Infuse your life with nature</p>
              <p>Embrace nature's essence and enhance your life.</p>
            </div>
          </li>
        </ul>
      </article>

      <div className='img_container'>
        <img src="images/home-images/decorate_plant.webp" alt="plant" />
      </div>

    </section>
  )
}

export default DecorateSection