import React, { useState } from 'react';
import "./MyAccForm.css";

export const MyAccForm = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform login logic here
    };
  return (
    <div className='myAccForm'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameOrEmail">
          Username or email address *
          <input
            type="text"
            id="usernameOrEmail"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password *
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label htmlFor="rememberMe">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember me
        </label>

        <button type="submit">Log In</button>
      </form>

      <div>
        <a href="/login/lost-password">Lost your password?</a>
      </div>
    </div>
  )
}

export default MyAccForm;
