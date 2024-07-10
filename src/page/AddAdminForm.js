import React, { useState } from 'react';
import axios from 'axios';

const AddAdminForm = () => {
    const [empNumber, setEmpNumber] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('empNumber', empNumber);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        if (file) {
            formData.append('file', file);
        }

        try {
            const response = await axios.post('http://localhost:8080/api/v1/admin/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Admin created:', response.data);
            setMessage('Admin created successfully!');
            // Clear form fields after successful submission
            setEmpNumber('');
            setName('');
            setEmail('');
            setPhone('');
            setFile(null);
        } catch (error) {
            console.error('Error creating admin:', error);
            setMessage('Failed to create admin.');
        }
    };

    return (
        <div>
            <h2>Add Admin</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>Employee Number:</label>
                <input type="text" value={empNumber} onChange={(e) => setEmpNumber(e.target.value)} required />
                
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                <label>File:</label>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddAdminForm;
