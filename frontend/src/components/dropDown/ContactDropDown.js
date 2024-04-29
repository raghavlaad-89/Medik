import React from 'react';
import { Link } from 'react-router-dom';

const ContactDropDown = () => {
  return (
    <div className='DropDown'>
        <ul className='DropDown_list'>
            <li className='DropDown_list_item'>
              <Link className='DropDown_Link'>Store Locator</Link>
            </li>
        </ul>
    </div>
  )
}

export default ContactDropDown