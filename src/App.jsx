import './styles/main.scss'
import { useState, useEffect, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import data from './data.json'

import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Shop from './pages/shop/Shop'

import SidebarOpenContext from './context/SidebarOpenContext'
import ShopFilterContext from './context/ShopFilterContext'
import ShopItemsContext from './context/ShopItemsContext'

function App() {
  const allPlants = useMemo(() => Object.values(data.plantsData).flat(), []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);
  
  const filteredPlants = useMemo(() => {
    return selectedCategory === "All" ? allPlants : data.plantsData[selectedCategory.toLowerCase()];
  }, [selectedCategory, allPlants]);

  return (
    <>
      <SidebarOpenContext.Provider value={{ isOpen, setIsOpen }}>
        <Navbar />
        <Sidebar />
      </SidebarOpenContext.Provider>

      <ShopFilterContext.Provider value={{ selectedCategory, setSelectedCategory, filteredPlants }}>
        <ShopItemsContext.Provider value={{ setCartItems }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </ShopItemsContext.Provider>
      </ShopFilterContext.Provider>
      <Footer />
    </>
  )
}

export default App
