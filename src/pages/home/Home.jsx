import React from 'react'
import DecorateSection from './components/DecorateSection'
import HeroSection from './components/HeroSection'
import PlantCategories from './components/PlantCategories'
import Testimonials from './components/Testimonials'
import TopTrending from './components/TopTrending'

const Home = () => {
  return (
    <main className='home_main'>
      <HeroSection />
      <DecorateSection />
      <TopTrending />
      <PlantCategories />
      <Testimonials />
    </main>
  )
}

export default Home