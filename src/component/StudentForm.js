// src/components/StudentForm.js
import React, { useState, useEffect } from 'react';

const StudentForm = ({ editing, currentStudent, onSubmit }) => {
  const [student, setStudent] = useState(currentStudent);

  useEffect(() => {
    setStudent(currentStudent);
  }, [currentStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
  };

  return (

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="regNumber"
        placeholder="Reg Number"
        value={student.regNumber}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={student.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">{editing ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default StudentForm;
