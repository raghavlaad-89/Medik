import React, { useRef, useState } from "react";
import "./Header.css";
import { FaHeart, FaShoppingCart, FaUser, FaPhoneAlt, FaInstagram, FaGooglePlusG, FaTwitter, FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import ContactDropDown from "../dropDown/ContactDropDown";
import ShopDropDown from "../dropDown/ShopDropDown";
import HomeDropDown from "../dropDown/HomeDropDown";
import ProfileDropDown from "../dropDown/ProfileDropDown";
import AdminDropDown from "../dropDown/AdminDropDown";
// import { useLogoutMutation } from "../../slices/usersApiSlice";
// import { resetCart } from "../../slices/cartSlice";
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from "../../slices/authSlice";
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  const [isHomeDropdownVisible, setHomeDropdownVisible] = useState(false);
  const [isShopDropdownVisible, setShopDropdownVisible] = useState(false);
  const [isContactDropdownVisible, setContactDropdownVisible] = useState(false);
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [isAdminDropdownVisible, setAdminDropdownVisible] = useState(false);
  

  const handleMouseEnterHome = () => {
    setHomeDropdownVisible(true);
  };

  const handleMouseLeaveHome = () => {
    setHomeDropdownVisible(false);
  };
  const handleMouseEnterShop = () => {
    setShopDropdownVisible(true);
  };

  const handleMouseLeaveShop = () => {
    setShopDropdownVisible(false);
  };
  const handleMouseEnterContact = () => {
    setContactDropdownVisible(true);
  };

  const handleMouseLeaveContact = () => {
    setContactDropdownVisible(false);
  };
  const handleMouseEnterProfile = () => {
    setProfileDropdownVisible(true);
  };

  const handleMouseLeaveProfile = () => {
    setProfileDropdownVisible(false);
  };

  const handleMouseEnterAdmin = () => {
    setAdminDropdownVisible(true);
  };

  const handleMouseLeaveAdmin = () => {
    setAdminDropdownVisible(false);
  };

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => (state.auth));
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [logoutApiCall] = useLogoutMutation();

  // const logoutHandler = async () => {
  //   try {
  //     await logoutApiCall().unwrap();
  //     dispatch(logout());
  //     // NOTE: here we need to reset cart state for when a user logs out so the next
  //     // user doesn't inherit the previous users cart and shipping
  //     dispatch(resetCart());
  //     navigate('/login');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div className="navbar">
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
      <nav className="navbar_lower">
        <Link to='/' className="navbar_lower_brand">
          <img src="https://medik.wpenginepowered.com/wp-content/themes/medik/images/logo.png" alt="Medik" className="navbar_logo" />
        </Link>
        <div className="navbar_lower_menu" ref={navRef}>
            <button onClick={showNavbar} className="navbar_lower_menu_btn closeBtn">
              <FaTimes />
            </button>
            <div onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}  className="navbar_lower_menu_link">
              <Link to="/" className="navbar_lower_menu_links">
                Home <i className='fas fa-caret-down' /> <MdArrowDropDown />
                {isHomeDropdownVisible  && <HomeDropDown />}
              </Link>
            </div>
            <div className="navbar_lower_menu_link">
              <Link to="/about" className="navbar_lower_menu_links">
                About
              </Link>
            </div>
            <div className="navbar_lower_menu_link">
              <Link to="/blog" className="navbar_lower_menu_links">
                Blog
              </Link>
            </div>
            <div className="navbar_lower_menu_link">
              <Link to="/collection" className="navbar_lower_menu_links">
                Collection
              </Link>
            </div>
            <div className="navbar_lower_menu_link" onMouseEnter={handleMouseEnterShop} onMouseLeave={handleMouseLeaveShop}>
              <Link to="/shop" className="navbar_lower_menu_links">
                Shop <i className='fas fa-caret-down' /> <MdArrowDropDown />
                {isShopDropdownVisible && <ShopDropDown />}
              </Link>
            </div>
            <div className="navbar_lower_menu_link" onMouseEnter={handleMouseEnterContact} onMouseLeave={handleMouseLeaveContact}>
              <Link to="/contact" className="navbar_lower_menu_links">
                Contact<i className='fas fa-caret-down' /> <MdArrowDropDown />
                {isContactDropdownVisible && <ContactDropDown />}
              </Link>
            </div>
            
        </div>
        <button onClick={showNavbar} className="navbar_lower_menu_btn openBtn">
          <FaBars /> Menu
        </button>
        

        
        <ul className="navbar_lower_icons">
        <li className="navbar_lower_icons_items">
            <a href="/wishlist" className="navbar_lower_icons_items_link">
              <FaHeart />
            </a>
          
          </li>
          <li className="navbar_lower_icons_items">
            { userInfo ? (
              <div className="" onMouseEnter={handleMouseEnterProfile} onMouseLeave={handleMouseLeaveProfile}>
                <Link to="/profile" className="navbar_lower_icons_items_link">
                  <FaUser /><i className='fas fa-caret-down' /> <MdArrowDropDown />
                </Link>
                {isProfileDropdownVisible && <ProfileDropDown />}
              </div>
            ) : (
              <Link to="/login" className="navbar_lower_icons_items_link">
                <FaUser />
              </Link>
            ) }
            
            
          </li>  
          
          <li className="navbar_lower_icons_items">
            { userInfo && userInfo.isAdmin ? (
              <div className="" onMouseEnter={handleMouseEnterAdmin} onMouseLeave={handleMouseLeaveAdmin}>
              <Link to="/" className="navbar_lower_icons_items_link">
                <MdAdminPanelSettings /><i className='fas fa-caret-down' /> <MdArrowDropDown />
              </Link>
              {isAdminDropdownVisible && <AdminDropDown />}
            </div>
            ) : (
              <a href="/cart" className="navbar_lower_icons_items_link cart-trolly">
                <FaShoppingCart className="navbar-lower-icons-cart" />
                <span className="navbar-lower-icons-cartItemCount">{cartItems.reduce((a, c) => a + c.qty, 0)}</span>
              </a>
            )}
            
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Header;
