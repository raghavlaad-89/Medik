import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./MyAccForm.css";
import Loader from '../loader/Loader.js';
import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';

export const MyAccForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if(userInfo){
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await login({email, password}).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  };
  return (
    <div className='myAccPage'>
      <div className='myAccForm_head'>
        LOGIN
      </div>
      
      <form onSubmit={submitHandler} className='form-container'>
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
        {/* <div className='formContainer_checkbox'>
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div> */}
        <button type="submit" disabled={isLoading}>LOGIN IN</button>
        { isLoading && <Loader /> }
        <div className='formContainer_lostPass'>
            <Link to={ redirect ? `/register?redirect=${redirect}` : '/register' }>New Costumer?</Link>
        </div>
      </form>
    </div>
  )
}

export default MyAccForm;
