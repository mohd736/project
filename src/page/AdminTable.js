import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminTable = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/admin/all');
      setAdmins(response.data); // Assuming response.data is an array of admin objects
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  return (
    <div>
      <h2>Admins Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>File Content</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.empNumber}</td>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.phone}</td>
              <td>
                {admin.fileContent && (
                  <a href={`data:application/octet-stream;base64,${btoa(new Uint8Array(admin.fileContent).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`} download="fileContent">Download File</a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
