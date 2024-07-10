import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import AddAdminForm from './AddAdminForm';

const Admin = () => {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState({ file: null, poster: '' });

  const handleFileChange = (e) => {
    setNewNotice({ ...newNotice, file: e.target.files[0] });
  };

  const handlePosterChange = (e) => {
    setNewNotice({ ...newNotice, poster: e.target.value });
  };

  const handleAddNotice = () => {
    if (newNotice.file && newNotice.poster) {
      setNotices([...notices, newNotice]);
      setNewNotice({ file: null, poster: '' });
    }
  };

  const handleDeleteNotice = (index) => {
    const updatedNotices = [...notices];
    updatedNotices.splice(index, 1);
    setNotices(updatedNotices);
  };

  const handleModifyNotice = (index) => {
    // Add your modification logic here
    console.log('Modifying notice at index:', index);
  };

  return (
    <div className="admin-home-page">
      <div className="navbar">
        <h1>ONLINE INFORMATIONBOARD SYSTEM</h1>
      </div>
      <div className="content">
        <div className="left-menu">
          <h2>Navigation</h2>
          <ul>
            <li><Link to="/manageStudent">Manage student</Link></li>
            <li><Link to="/ProfileEdite">Change Profile</Link></li>
            <li><Link to="/RegistrationForm">Change Password</Link></li>
            <li><Link to="/Setting">Setting</Link></li>
            <li><Link to="/">Log out</Link></li>
          </ul>
        </div>
        <div className="main-content">
          <AddAdminForm/>
          </div>
      </div>
      <div className="footer">
        <p>ONLINE NOTICE BOARD SYSTEM</p>
      </div>
    </div>
  );
};

export default Admin;
