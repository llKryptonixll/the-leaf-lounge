import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import SidebarOpenContext from '../context/SidebarOpenContext'

const Sidebar = () => {

  const { isOpen, setIsOpen } = useContext(SidebarOpenContext);

  return (
    <aside className={`mobile_sidebar ${isOpen == true ? "sidebarOpen" : ""}`}>
      <nav>
        <button onClick={() => setIsOpen(false)}>
          CLOSE <FontAwesomeIcon className='x_icon' icon={faXmark} />
        </button>
        <ul className='link_list'>
          <li onClick={() => setIsOpen(false)} className='list_item'>
            <Link to={"/"} className='link'>HOME <FontAwesomeIcon icon={faChevronRight} /></Link>
          </li>
          <li onClick={() => setIsOpen(false)} className='list_item'>
            <Link to={"/about"} className='link'>ABOUT <FontAwesomeIcon icon={faChevronRight} /></Link>
          </li>
          <li onClick={() => setIsOpen(false)} className='list_item'>
            <Link to={"/shop"} className='link'>SHOP <FontAwesomeIcon icon={faChevronRight} /></Link>
          </li>
          <li onClick={() => setIsOpen(false)} className='list_item'>
            <Link to={"/contact"} className='link'>CONTACT <FontAwesomeIcon icon={faChevronRight} /></Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar