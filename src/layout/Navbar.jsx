import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SidebarOpenContext from '../context/SidebarOpenContext'
import useCurrentLocation from '../hooks/useCurrentLocation'

const Navbar = () => {
  const { getClassName } = useCurrentLocation();
  const [reachedTop, setReachedTop] = useState(true);
  const { setIsOpen } = useContext(SidebarOpenContext);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setReachedTop(isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header>
      <nav className={`desktop_nav ${reachedTop === true ? "" : "addNav_BG"}`}>
        <img className='logo' src="images/leaf-lounge-logo.webp" alt="company-logo" />
        <ul className='link_list'>
          <li className='list_item'>
            <Link className={`link ${getClassName("/")}`} to={"/"}>Home</Link>
          </li>
          <li className='list_item'>
            <Link className={`link ${getClassName("/about")}`} to={"/about"}>About</Link>
          </li>
          <li className='list_item'>
            <Link className={`link ${getClassName("/shop")}`} to={"/shop"}>Shop</Link>
          </li>
          <li className='list_item'>
            <Link className={`link ${getClassName("/contact")}`} to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <div className='btn_container'>
          <button aria-label='open-mobile-navigation' onClick={() => setIsOpen(true)} className='bars_icon'>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button aria-label='open-shopping-cart' className='cart_icon'>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar