import './styles/main.scss'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'
import CartModal from './layout/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Shop from './pages/shop/Shop'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar 
        setIsOpen={setIsOpen}
      />
      <Sidebar 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='shop' element={<Shop />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
