import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className='main_container'>
        <div className="general_wrapper">
          <img src="images/leaf-lounge-logo.webp" alt="company_logo" />
          <p>The Leaf Lounge: A Treasury of Insights by the Skillful Plant Connoisseurs</p>
          <div className='hotline_container'>
            <span>hotline:</span>
            <span>(+00) 987 877 821</span>
          </div>
          <ul className="social_links_list">
            <li>
              <a href='https://www.google.com/' className='link' aria-label='our-instagram-page'>
                <FontAwesomeIcon className='icon' icon={faInstagram}/>
              </a>
            </li>
            <li>
              <a href='https://www.google.com/' className='link' aria-label='our-facebook-page'>
                <FontAwesomeIcon className='icon' icon={faFacebookF}/>
              </a>
            </li>
            <li>
              <a href='https://www.google.com/' className='link' aria-label='our-twitter-page'>
                <FontAwesomeIcon className='icon' icon={faTwitter}/>
              </a>
            </li>
            <li>
              <a href='https://www.google.com/' className='link' aria-label='our-youtube-page'>
                <FontAwesomeIcon className='icon' icon={faYoutube}/>
              </a>
            </li>  
          </ul>
        </div>

        <div className='footer_list_wrapper'>
          <ul className='overview_list'>
            <li className='list_header'>OVERVIEW</li>
            <li>
              <Link className='component_links' to={"/"}>Home</Link>
            </li>
            <li>
              <Link className='component_links' to={"/about"}>About us</Link>
            </li>
            <li>
              <Link className='component_links' to={"shop"}>Shop</Link>
            </li>
            <li>
              <Link className='component_links' to={"/contact"}>Contact us</Link>
            </li>
          </ul>

          <ul className='resources_list'>
            <li className='list_header'>RESOURCES</li>
            <li>Help Center</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>

          <ul className='location_list'>
            <li className='list_header'>LOCATION</li>
            <li>123 Blossom Lane</li>
            <li>Evergreen City, CA 98765</li>
          </ul>
        </div>
      </div>
      
      <div className='bottom_container'>
        <p>&copy; Copyright The Leaf Lounge</p>
      </div>
    </footer>
  )
}

export default Footer