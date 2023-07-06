import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navbar = () => {

  const [reachedTop, setReachedTop] = useState(true);

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
    <nav className={`desktop_nav ${reachedTop === true ? "" : "addNav_BG"}`}>
      <img className='logo' src="images/leaf-lounge-logo.png" alt="company-logo" />
      <ul className='link_list'>
        <li className='list_item'>
          <Link className='link' to={"/"}>Home</Link>
        </li>
        <li className='list_item'>
          <Link className='link' to={"/about"}>About</Link>
        </li>
        <li className='list_item'>
          <Link className='link' to={"/shop"}>Shop</Link>
        </li>
        <li className='list_item'>
          <Link className='link' to={"/contact"}>Contact</Link>
        </li>
      </ul>

      <button className='cart_icon'>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </nav>
  )
}

export default navbar