import './styles/main.scss'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import CartModal from './layout/cart_modal/CartModal'
import Footer from './layout/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Shop from './pages/shop/Shop'

import { SidebarOpenProvider } from './context/SidebarOpenContext';
import { ShopFilterProvider } from './context/ShopFilterContext'
import ShopItemsContext from './context/ShopItemsContext'

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  cartIsOpen === true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";

  function openCart() {
    setCartIsOpen(true)
  }

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
        <Navbar openCart={openCart} />
        <Sidebar />
      </SidebarOpenProvider>

      <CartModal
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

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
