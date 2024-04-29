import React from 'react';
import { Link } from 'react-router-dom';

const ShopDropDown = () => {
  return (
    <div className='DropDown'>
        <ul className='DropDown_list'>
            <li className='DropDown_list_item'>
              <Link to='/cartPage' className='DropDown_Link'>Cart</Link>
            </li>
            <li className='DropDown_list_item'>
              <Link className='DropDown_Link'>CheckOut</Link>
            </li>
            <li className='DropDown_list_item'>
              <Link to='/wishlist' className='DropDown_Link'>Wishlist</Link>
            </li>
            <li className='DropDown_list_item'>
              <Link to='/myaccount' className='DropDown_Link'>My Account</Link>
            </li>
        </ul>
    </div>
  )
}

export default ShopDropDown