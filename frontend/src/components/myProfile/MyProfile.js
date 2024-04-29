import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/Loader.js';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    // const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [register, { isLoading }] = useRegisterMutation();
    // const { userInfo } = useSelector((state) => state.auth);
  
    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';
  
    // useEffect(() => {
    //   if(userInfo){
    //     navigate(redirect);
    //   }
    // }, [userInfo, redirect, navigate])
    const submitHandler = async (e) => {
      e.preventDefault();
      if(password !== confirmPassword){
        toast.error('Passwords do not match');
        return;
      } else {
        try {
            const res = await register({name, email, password}).unwrap();
            dispatch(setCredentials({ ...res, }));
            navigate(redirect);
          } catch (err) {
            toast.error(err?.data?.message || err.error)
          }
      }
      
    };
  return (
    <div className='myAccPage'>
      <div className='myAccForm_head'>
        Register
      </div>
      
      <form onSubmit={submitHandler} className='form-container'>
      <div>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            id="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {/* <div className='formContainer_checkbox'>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div> */}
        <button type="submit" disabled={isLoading}>REGISTER</button>
        { isLoading && <Loader /> }
        {/* <div className='formContainer_lostPass'>
            <Link to={ redirect ? `/login?redirect=${redirect}` : '/login' }>Already have an accout?</Link>
        </div> */}
      </form>
    </div>
  )
}

export default MyProfile;