import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Form.css';
import { createStudent } from '../Service/StudentService';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    regNumber: '',
    email: '',
    program: '',
    password: '', // assuming you have a password field
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      name: formData.fullname,
      regNumber: formData.regNumber,
      email: formData.email,
      program: formData.program,
      password: formData.password, // assuming you need to save password too
    };
    createStudent(studentData)
      .then((response) => {
        console.log(response.data);
        navigate('/manageStudents'); // Redirect to manage students page after registration
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>
          Full Name:
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
        </label>
        <label>
          Registration Number:
          <input type="text" name="regNumber" value={formData.regNumber} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Program:
          <input type="text" name="program" value={formData.program} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <div className="form-actions">
          <button type="submit">Register</button>
        </div>
        <div className="form-links">
          <Link to="/">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
