import React, { useState,  useEffect } from "react";
import "./MaskShopTimer.css";


const MaskShopTimer = () => {
    const initialTime = 306 * 24 * 60 * 60;
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const formatTime = (time) => {
      return time < 10 ? `0${time}` : time;
    };
  
    const days = Math.floor(timeRemaining / (24 * 60 * 60));
    const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
    const seconds = timeRemaining % 60;

  return (
    <div className='cover'>
        <div className="cover_text">
            <div className="cover_textHeading">Grade A Safety Masks for Sale. Hurry!</div>
            <div className="cover_textSubHead">Offer Ends On:</div>
            <div className="cover_timer">{formatTime(days)} : {formatTime(hours)} : {formatTime(minutes)} : {formatTime(seconds)}</div>
            <div className="abbrivation">
                <ul className="abbrivation_list">
                    <li className="abbrivation_listitems">Days</li>
                    <li className="abbrivation_listitems">Hour</li>
                    <li className="abbrivation_listitems">Minute</li>
                    <li className="abbrivation_listitems">Second</li>
                </ul>
            </div>
            <button className="cover_button">Buy Now</button>
        </div>
    </div>
  )
}

export default MaskShopTimer;