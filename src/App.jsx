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
import Checkout from './pages/checkout/Checkout'

import { SidebarOpenProvider } from './context/SidebarOpenContext';
import { ShopFilterProvider } from './context/ShopFilterContext'
import { ShopItemsProvider } from './context/ShopItemsContext'
import { AnimationProvider } from './context/AnimationContext'

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  useEffect(() => {
    cartIsOpen === true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";
    return () => {
      document.body.style.overflowY = 'scroll';
    }
  }, [cartIsOpen])

  function openCart() {
    setCartIsOpen(true)
  }

  return (
    <>
      <SidebarOpenProvider>
        <Navbar openCart={openCart} />
        <Sidebar />
      </SidebarOpenProvider>

      <ShopFilterProvider>
        <ShopItemsProvider>
          <CartModal
            cartIsOpen={cartIsOpen}
            setCartIsOpen={setCartIsOpen}
          />
          <AnimationProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path='shop' element={<Shop />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='checkout' element={<Checkout />} />
            </Routes>
          </AnimationProvider>
        </ShopItemsProvider>
      </ShopFilterProvider>
      <Footer />
    </>
  )
}

export default App
