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

import { SidebarOpenProvider } from './context/SidebarOpenContext';
import { ShopFilterProvider } from './context/ShopFilterContext'
import ShopItemsContext from './context/ShopItemsContext'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  function incrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  function decrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  console.log(cartItems);
  

  function addToCart(shopItem) {
    if (existingCartItems.some((existingItem) => existingItem.id === shopItem.id)) {
      // If the item is already in the cart, update its quantity
      const updatedCartItems = existingCartItems.map((existingItem) => {
        if (existingItem.id === shopItem.id) {
          existingItem.quantity += quantity;
        }
        return existingItem;
      });
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      // If the item is not in the cart, add it with the specified quantity
      const newItem = { ...shopItem, quantity };
      setCartItems((prevItems) => [...prevItems, newItem]);
      const updatedCartItems = [...existingCartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
    // reset quantity att the end to avoid wrong quantity
    setQuantity(1)
  }


  return (
    <>
      <SidebarOpenProvider>
        <Navbar />
        <Sidebar />
      </SidebarOpenProvider>

      <ShopFilterProvider>
        <ShopItemsContext.Provider value={{ addToCart, quantity, incrementQuantity, decrementQuantity }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </ShopItemsContext.Provider>
      </ShopFilterProvider>
      <Footer />
    </>
  )
}

export default App
