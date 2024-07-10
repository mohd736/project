import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ManageStudents.css';
import { studentList, deleteStudent } from '../Service/StudentService';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchAllStudent();
  }, []);

  const fetchAllStudent = () => {
    studentList()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (studentId) => {
    deleteStudent(studentId)
      .then(() => {
        setStudents(students.filter((student) => student.id !== studentId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = (student) => {
    // Navigate to the update form page and pass the student data as props
    // You can use React Router's `useHistory` hook to navigate to the update form
    console.log(`Updating student: ${student.name}`);
  };

  return (
    <div className="manage-students-container">
      <h2>Manage Students</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Registration Number</th>
            <th>Email</th>
            <th>Program</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.regNumber}</td>
              <td>{student.email}</td>
              <td>{student.program}</td>
              <td>
                <button className="update-btn" onClick={() => handleUpdate(student)}>Update</button>
                <button className="delete-btn" onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="manage-students-actions">
        <Link to="/registrationForm" className="nav-link">Register New Student</Link>
      </div>
    </div>
  );
};

export default ManageStudents;
