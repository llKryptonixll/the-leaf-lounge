import './styles/main.scss'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import data from './data.json'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'
import CartModal from './layout/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Shop from './pages/shop/Shop'
import SidebarOpenContext from './context/SidebarOpenContext'
import ShopFilterContext from './context/ShopFilterContext'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  // shop item filter
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allPlants = Object.values(data.plantsData).flat();
  const filteredPlants = selectedCategory === "All" ? allPlants : data.plantsData[selectedCategory.toLocaleLowerCase()]

  return (
    <>
      <SidebarOpenContext.Provider value={{isOpen, setIsOpen}}>
        <Navbar />
        <Sidebar />
      </SidebarOpenContext.Provider>

      <ShopFilterContext.Provider value={{selectedCategory, setSelectedCategory, filteredPlants}}>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>   
        </Routes>
      </ShopFilterContext.Provider>
      <Footer />
    </>
  )
}

export default App
