import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './User.css';
import AdminTable from './AdminTable';

const User = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetch('/api/v1/admin');
      const data = await response.json();
      setNotices(data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  return (
    <div className="user-home-page">
      <div className="navbar">
        <h1>ONLINE NOTICE BOARD SYSTEM</h1>
      </div>
      <div className="content">
        <div className="left-menu">
          <h2>Navigation</h2>
          <ul>
            <li><Link to="/ProfileEdite">Change Profile</Link></li>
            <li><Link to="/RegistrationForm">Change Password</Link></li>
            <li><Link to="/Setting">Setting</Link></li>
            <li><Link to="/">Log out</Link></li>
          </ul>
        </div>
        <div className="main-content">
          <AdminTable/>
        </div>
      </div>
      <div className="footer">
        <p>ONLINE NOTICE BOARD SYSTEM</p>
      </div>
    </div>
  );
};

export default User;
