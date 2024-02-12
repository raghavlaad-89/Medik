import React, { useRef, useState } from "react";
import "./Header.css";
import { FaHeart, FaShoppingCart, FaUser, FaPhoneAlt, FaInstagram, FaGooglePlusG, FaTwitter, FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import DropDown from "../dropDown/DropDown";

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  // const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  // const changeClick = () => setClick(!click)
  // const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
      setDropdown(true)
  }

  const onMouseLeave = () => {
      setDropdown(false)
  }
  return (
    <nav className="navbar">
      <div className="navbar_upper">
        <div className="navbar_upper_left">
          <div className="navbar_upper_left_phone">
            <FaPhoneAlt />
            <a href="/" className="link">
              (00) 00 111 222
            </a>
          </div>
          <div className="navbar_upper_left_email">
            <MdEmail />
            <a href="/" className="link">
              info@xyx.com
            </a>
          </div>
        </div>
        <div className="navbar_upper_social">
          <ul className="navbar_upper_social_list">
            <li>
              <a href="/" className="link navbar_upper_social_links">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/" className="link navbar_upper_social_links">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/" className="link navbar_upper_social_links">
                <FaGooglePlusG />
              </a>
            </li>
            <li>
              <a href="/" className="link navbar_upper_social_links">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar_lower">
        <div className="navbar_lower_brand">
          <img src="https://medik.wpenginepowered.com/wp-content/themes/medik/images/logo.png" alt="Medik" className="navbar_logo" />
        </div>
        <nav className="navbar_lower_menu" ref={navRef}>
            <button onClick={showNavbar} className="navbar_lower_menu_btn closeBtn">
              <FaTimes />
            </button>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}  className="navbar_lower_menu_link">
              <Link to="/" className="navbar_lower_menu_links">
                Home <i className='fas fa-caret-down' />
                {dropdown && <DropDown />}
              </Link>
            </div>
            <div className="navbar_lower_menu_link">
              <Link to="/about" className="navbar_lower_menu_links">
                About
              </Link>
            </div>
            <div className="navbar_lower_menu_link">
              <Link to="/collection" className="navbar_lower_menu_links">
                Collection
              </Link>
            </div>
            <div className="navbar_lower_menu_link" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to="/shop" className="navbar_lower_menu_links">
                Shop <i className='fas fa-caret-down' />
                {dropdown && <DropDown />}
              </Link>
            </div>
            <div className="navbar_lower_menu_link" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to="/contact" className="navbar_lower_menu_links">
                Contact Us <i className='fas fa-caret-down' />
                {dropdown && <DropDown />}
              </Link>
            </div>
        </nav>

        <button onClick={showNavbar} className="navbar_lower_menu_btn openBtn">
          <FaBars /> Menu
        </button>

        
        <ul className="navbar-lower-icons">
          <li className="navbar-items">
            <a href="/myaccount" className="navbar-lower-icons-link">
              <FaUser />
            </a>
            
          </li>  
          <li className="navbar-items">
            <a href="/contact" className="navbar-lower-icons-link">
              <FaHeart />
            </a>
          
          </li>
          <li className="navbar-items">
            <a href="/contact" className="navbar-lower-icons-link">
              <FaShoppingCart />
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Header;
