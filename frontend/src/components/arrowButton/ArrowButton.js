import React, { useState, useEffect } from 'react';
import './ArrowButton.css'; // Import CSS file for styling
import { FaArrowUp } from 'react-icons/fa';

const ArrowButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    // Show the button when the user scrolls down the page
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Effect to add event listener for scroll on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`arrow-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
      title="Back to Top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ArrowButton;
