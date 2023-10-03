import { useContext } from "react"
import { motion } from "framer-motion"
import AnimationContext from "../../../context/AnimationContext"

const About_header = () => {
  const { textAnimation1, textAnimation2, mainTextAnimation } = useContext(AnimationContext)
  const imageAnimation = {
    initial: { opacity: 0, right: -60 },
    whileInView: { opacity: 1, right: 0 },
    transition: { duration: 0.5, delay: 0.4 },
    viewport: { once: true }
  }

  return (
    <section className='about_header_section'>
      <div className='text_wrapper'>
        <motion.p {...textAnimation1}>Evergreen Florist embracing the Language of Flowers</motion.p>
        <motion.p {...textAnimation2}>
          Our plant shop is passionate about inspiring and empowering plant enthusiasts to create lush green spaces with our high-quality plants, supplies, and expertise. Come visit us today!
        </motion.p>
        <motion.p {...mainTextAnimation}>Evelyn Greenleaf, owner</motion.p>
      </div>
      <motion.div {...imageAnimation} className='image_wrapper'>
        <img src="images/about-images/about_header_img.webp" alt="flower" />
      </motion.div>
    </section>
  )
}

export default About_header