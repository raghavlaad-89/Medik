import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import "./DropDown.css";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { logout } from "../../slices/authSlice";

const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='DropDown'>
        <ul className='DropDown_list'>
            <li className='DropDown_list_item'>
                <Link to="/profile" className='DropDown_Link'>Profile</Link>
            </li>
            <li className='DropDown_list_item'>
                <Link className='DropDown_Link' onClick={logoutHandler}>Logout</Link>
            </li>
        </ul>
    </div>
  )
}

export default ProfileDropDown;