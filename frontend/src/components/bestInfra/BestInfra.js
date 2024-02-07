import React from 'react';
import "./BestInfra.css";
import img from "../../utils/infraImg.jpg";

const BestInfra = () => {
  return (
    <div className='bestInfra'>
        <div className='infraImage'>
            <img src={img}  alt="infrastructure" />
        </div>
        <div className='infraContent'>
            <h1 className="infra_title">The Best Infrastructure</h1>
            <div className='infra_p1'>
                Unpacked reserved sir offering bed judgment may and quitting speaking. Is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hence chief he cause. Whole no doors on hoped. Mile tell if help they ye full name.
            </div>
            <div className='infra_p2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm consequat.   
            </div>
            <div className='infra_btn'>
                <button className='infra_btnn'>View Help</button>
            </div>
        </div>
    </div>
  )
}

export default BestInfra