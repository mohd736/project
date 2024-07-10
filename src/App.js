import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './page/LoginForm';
import RegistrationForm from './page/RegistrationForm';
import Admin from './page/Admin';
import ManageStudents from './page/ManageStudent';
import User from './page/User';
import StudentForm from './component/StudentForm';
import StudentTable from './component/StudentTable';
import ChangeProfile from './page/ChangeProfile';
import ProfileEdit from './page/ProfileEdit'




function App() {
  return (
    <Router>
      <div style={{ color: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/manageStudent" element={<ManageStudents />} />
          <Route path="/user" element={<User />} />
          <Route path="/studentForm" element={<StudentForm />} />
          <Route path="/studentTable" element={<StudentTable />} />
          <Route path="/changeProfile" element={<ChangeProfile />} />
          <Route path="/ProfileEdit" element={<ProfileEdit />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
