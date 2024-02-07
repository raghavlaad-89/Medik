import React from 'react';
import './Footer.css';
import logo from "../../utils/logo_bg_black.jpeg";
import { FaHome, FaPhoneAlt, FaFacebook, FaTwitter, FaGooglePlusG, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className='content_first'>
            <div className="content_first_logo">
                <img src={logo} alt="Medik Logo" />
            </div>
            <div className='content_first_address'>
                <FaHome /> <span>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</span>
            </div>
            <div className='content_first_phone'> 
                <FaPhoneAlt />
                <span><a href='/' className='link'>+91 12345678</a></span>
            </div>
            <div className='content_first_email'>
                <MdEmail /> 
                <span><a href='/' className='link'>support@somemail.com</a></span>
            </div>
            <div className='content_first_social'>
                <div className='content_first_social_links'>
                    <a href='/' className='link'><FaTwitter /></a>
                </div>
                <div className='content_first_social_links'>
                    <a href='/' className='link'><FaFacebook /></a>
                </div>
                <div className='content_first_social_links'>
                    <a href='/' className='link'><FaGooglePlusG /></a>
                </div>
                <div className='content_first_social_links'>
                    <a href='/' className='link'><FaInstagram /></a>
                </div>
                <div className='content_first_social_links'>
                    <a href='/' className='link'><FaLinkedin /></a>
                </div>
            </div>
        </div>
        <div className='content_second'>
            <div className='content_second_head'>Help</div>
            <ul>
                <li><a href="/" className='link'>Scissors</a></li>
                <li><a href="/" className='link'>Glucometer</a></li>
                <li><a href="/" className='link'>Disposable Gloves</a></li>
                <li><a href="/" className='link'>Cleaning Scissor</a></li>
                <li><a href="/" className='link'>Smart Mask</a></li>
            </ul>
        </div>
        <div className='content_third'>
            <div className='content_third_head'>Support</div>
            <ul>
                <li><a href="/" className='link'>Plaster machine</a></li>
                <li><a href="/" className='link'>Pedometer</a></li>
                <li><a href="/" className='link'>Cleaning Scissor</a></li>
                <li><a href="/" className='link'>Smart Mask</a></li>
                <li><a href="/" className='link'>Pedometer</a></li>
            </ul>
        </div>
        <div className='content_fourth'>
            <div className='content_fourth_head'>
                Information
            </div>
            <ul>
                <li><a href="/" className='link'>Scissors</a></li>
                <li><a href="/" className='link'>Glucometer</a></li>
                <li><a href="/" className='link'>Disposable Gloves</a></li>
                <li><a href="/" className='link'>Cleaning Scissor</a></li>
                <li><a href="/" className='link'>Smart Mask</a></li>
            </ul>
        </div>
      </div>
      <div className="footer_copyright">
        &copy; Copyright Powered by Designthemes
      </div>
    </footer>
  );
};

export default Footer;