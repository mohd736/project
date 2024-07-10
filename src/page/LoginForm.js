import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Formlogin.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user is an admin
    if (username === 'admin' && password === 'password') {
      // Redirect the user to the AdminHomePage component
      navigate('/admin-home');
    } else {
      // Redirect the user to the appropriate page
      navigate('/dashboard');
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username or Email:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="form-actions">
          <button type="submit"></button>
          <Link to="/admin">Login</Link>
          <Link to="/User"></Link>
        </div>
        <div className="form-links">

          <Link to="/user">Forgot Password?</Link>
          <Link to="/registrationForm">Create Account</Link>



        </div>
      </form>
    </div>
  );
};

export default LoginForm;