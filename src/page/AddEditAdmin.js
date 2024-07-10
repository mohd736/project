import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createAdmin, getAdminById, updateAdmin } from './AdminService';

const AddEditAdmin = () => {
  const [admin, setAdmin] = useState({ name: '', email: '', EmpNumber: '', phone: '' });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      fetchAdmin(id);
    }
  }, [id]);

  const fetchAdmin = async (id) => {
    const response = await getAdminById(id);
    setAdmin(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateAdmin(id, admin);
    } else {
      await createAdmin(admin);
    }
    history.push('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit Admin' : 'Add Admin'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={admin.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={admin.email} onChange={handleChange} />
        </label>
        <label>
          Employee Number:
          <input type="text" name="EmpNumber" value={admin.EmpNumber} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="number" name="phone" value={admin.phone} onChange={handleChange} />
        </label>
        <button type="submit">{id ? 'Update' : 'Add'} Admin</button>
      </form>
    </div>
  );
};

export default AddEditAdmin;
