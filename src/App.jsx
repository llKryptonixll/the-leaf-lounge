import './styles/main.scss'
import { useState, useEffect } from 'react'
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
import ShopItemsContext from './context/ShopItemsContext'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  // shop item filter
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allPlants = Object.values(data.plantsData).flat();
  const filteredPlants = selectedCategory === "All" ? allPlants : data.plantsData[selectedCategory.toLocaleLowerCase()];

  // add items into the cart
  const [cartItems, setCartItems] = useState([]);

    // get stored shop items from local storage
    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(storedCartItems);
    }, []); 
    console.log(cartItems);
  

  return (
    <>
      <SidebarOpenContext.Provider value={{isOpen, setIsOpen}}>
        <Navbar />
        <Sidebar />
      </SidebarOpenContext.Provider>

      <ShopFilterContext.Provider value={{selectedCategory, setSelectedCategory, filteredPlants}}>
        <ShopItemsContext.Provider value={{setCartItems}}>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='shop' element={<Shop />}/>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>   
          </Routes>
        </ShopItemsContext.Provider>
      </ShopFilterContext.Provider>
      <Footer />
    </>
  )
}

export default App
