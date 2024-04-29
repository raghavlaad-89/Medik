import React from 'react';
import { Link } from 'react-router-dom'; 

import "./DropDown.css";


const AdminDropDown = () => {
  
  return (
    <div className='DropDown'>
        <ul className='DropDown_list'>
            <li className='DropDown_list_item'>
                <Link to="/admin/userlist" className='DropDown_Link'>Users</Link>
            </li>
            <li className='DropDown_list_item'>
                <Link to="/admin/orderlist" className='DropDown_Link'>Orders</Link>
            </li>
            <li className='DropDown_list_item'>
                <Link to="/admin/productlist" className='DropDown_Link'>Products</Link>
            </li>
        </ul>
    </div>
  )
}

export default AdminDropDown;