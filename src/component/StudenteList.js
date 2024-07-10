// src/components/StudentList.js
import React, { useState, useEffect } from 'react';
import studentService from '../services/studentService'; // Adjusted import path
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
import '../App.css';

const StudenteList = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({ id: '', regNumber: '', name: '', email: '', phone: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await studentService.getStudents();
    setStudents(result.data);
  };

  const deleteStudent = async (id) => {
    await studentService.deleteStudent(id);
    loadStudents();
  };

  const handleSubmit = async (student) => {
    if (editing) {
      await studentService.updateStudent(student.id, student);
    } else {
      await studentService.createStudent(student);
    }
    loadStudents();
    setCurrentStudent({ id: '', regNumber: '', name: '', email: '', phone: '' });
    setEditing(false);
  };

  const editStudent = (student) => {
    setCurrentStudent(student);
    setEditing(true);
  };

  return (
    <div className="container">
      <h2>Student Management</h2>
      <StudentForm editing={editing} currentStudent={currentStudent} onSubmit={handleSubmit} />
      <StudentTable students={students} onEdit={editStudent} onDelete={deleteStudent} />
    </div>
  );
};

export default StudenteList;
