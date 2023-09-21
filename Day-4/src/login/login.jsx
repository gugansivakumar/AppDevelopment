import React, { useState } from 'react';
import '../login/login.css';
import groceryLoginImage from '../img/jeremy-bishop-G9i_plbfDgk-unsplash.jpg';
import { Link } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Enter username and password.');
    } else {
    
      window.location.href = '/home'; 
    }
  };



  const isUsernameValid = username.trim() !== '';
  const isPasswordValid = password.trim() !== '';

  return (
    <div className="grocery-login-background">
      <img src={groceryLoginImage} alt="Grocery Login" className="login-image" />
      <div className="grocery-login-form">
        <h1 >Log In</h1>
        <label className='gugan'>
          Username:
          <div className={`input-form ${isUsernameValid ? 'valid' : ''}`}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
          </div>
        </label>
        <label className='guganpass'>
          Password:
          <div className={`input-form ${isPasswordValid ? 'valid' : ''}`}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </div>
        </label>
        <div className="button-container">
          <button onClick={handleLogin} className="button-submit">Log In</button>
          <span>or</span>
          <Link to="/signup">
              <button type="button">SignUp</button>
            </Link>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Login;