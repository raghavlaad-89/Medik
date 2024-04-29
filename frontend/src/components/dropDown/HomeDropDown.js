import React from 'react';
import { Link } from 'react-router-dom'; 
import "./DropDown.css";

const HomeDropDown = () => {
  return (
    <div className='DropDown'>
        <ul className='DropDown_list'>
            <li className='DropDown_list_item'>
                <Link className='DropDown_Link'>Covid-19 Supplies Demo</Link>
            </li>
            <li className='DropDown_list_item'>
                <Link className='DropDown_Link'>Pressure Monitor Demo</Link>
            </li>
            <li className='DropDown_list_item'>
                <Link className='DropDown_Link'>Thermometer Demo</Link>
            </li>
            <li className='DropDown_list_item'>
                <Link className='DropDown_Link'>HandSanitize Demo</Link>
            </li>
            <li className='DropDown_list_item'>
                <Link className='DropDown_Link' to="/shop">Medik Shop</Link>
            </li>
        </ul>
    </div>
  )
}

export default HomeDropDown