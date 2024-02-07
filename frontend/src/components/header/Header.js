import React, { useRef } from "react";
import "./Header.css";
import { FaHeart, FaShoppingCart, FaUser, FaPhoneAlt, FaInstagram, FaGooglePlusG, FaTwitter, FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
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
            <a href="/home" className="navbar_lower_menu_link">
               Home
            </a>
            <a href="/collection" className="navbar_lower_menu_link">
               Collection
            </a>
            <a href="/about" className="navbar_lower_menu_link">
               About
            </a>
            <a href="/shop" className="navbar_lower_menu_link">
               Shop
            </a>
            <a href="/contact" className="navbar_lower_menu_link">
               ContactUs
            </a>
        </nav>

        <button onClick={showNavbar} className="navbar_lower_menu_btn openBtn">
          <FaBars /> Menu
        </button>

        
        <ul className="navbar-lower-icons">
          <li className="navbar-items">
            <a href="/contact" className="navbar-lower-icons-link">
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
