import { motion } from "framer-motion"

const DecorateSection = () => {
  const headerSpan1Animation = {
    initial: { opacity: 0, left: -60 },
    whileInView: { opacity: 1, left: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  }
  const headerSpan2Animation = {
    initial: { opacity: 0, right: -60 },
    whileInView: { opacity: 1, right: 0 },
    transition: { duration: 0.5, delay: 0.1},
    viewport: { once: true }
  }
  const mainTextAnimation = {
    initial: { opacity: 0, top: -60 },
    whileInView: { opacity: 1, top: 0 },
    transition: { duration: 0.5, delay: 0.3 },
    viewport: { once: true }
  }
  const generalIconAnimation = {
    initial: { opacity: 0, top: -60 },
    whileInView: { opacity: 1, top: 0 },
    viewport: { once: true }
  }
  const generalIconContentAnimation = {
    initial: { opacity: 0, right: -60 },
    whileInView: { opacity: 1, right: 0 },
    viewport: { once: true }
  }
  const plantImageAnimation = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, delay: 0.8 },
    viewport: { once: true }
  }
  return (
    <section className="decorate_section">
      <article className='article_container'>
        <div className="text_wrapper">
          <h2 className='header'>
            <motion.span {...headerSpan1Animation}>Decorate your home</motion.span> 
            <motion.span {...headerSpan2Animation}> with plants</motion.span>
          </h2>
          <motion.p {...mainTextAnimation} className='text'>
            Transform your living space into a vibrant oasis by adorning it with lush green plants, adding a touch of natural beauty and a breath of fresh air to your home decor. 
            With their serene presence and countless benefits, plants bring life and tranquility to any room, creating a harmonious environment that soothes the mind and invigorates the soul.
          </motion.p>
        </div>    

        <ul className='icon_text_list'>
          <li className='list_item'>
            <motion.div {...generalIconAnimation} transition={{duration: 0.5, delay: 0.4}} className='icon_wrapper'>
              <img src="images/home-images/quality_icon.webp" alt="quality-icon" />
            </motion.div>
            <motion.div {...generalIconContentAnimation} transition={{duration: 0.5, delay: 0.5}} className='content_wrapper'>
              <p>Unbeatable quality</p>
              <p>Our products boast an unbeatable quality that sets them apart from the competition.</p>
            </motion.div>
          </li>
          <li className='list_item'>
            <motion.div {...generalIconAnimation} transition={{duration: 0.5, delay: 0.5}} className='icon_wrapper'>
              <img src="images/home-images/delivery_icon.webp" alt="delivery-icon" />
            </motion.div>
            <motion.div {...generalIconContentAnimation} transition={{duration: 0.5, delay: 0.6}} className='content_wrapper'>
              <p>Fast delivery to your door</p>
              <p>Enjoy fast door-to-door delivery for your convenience.</p>
            </motion.div>
          </li>
          <li className='list_item'>
            <motion.div {...generalIconAnimation} transition={{duration: 0.5, delay: 0.6}} className='icon_wrapper'>
              <img src="images/home-images/plant_icon.webp" alt="plant-icon" />
            </motion.div>
            <motion.div {...generalIconContentAnimation} transition={{duration: 0.5, delay: 0.7}} className='content_wrapper'>
              <p>Infuse your life with nature</p>
              <p>Embrace nature&apos;s essence and enhance your life.</p>
            </motion.div>
          </li>
        </ul>
      </article>

      <div className='img_container'>
        <motion.img {...plantImageAnimation} src="images/home-images/decorate_plant.webp" alt="plant" />
      </div>

    </section>
  )
}

export default DecorateSection