// ProfileEdit.js
import React, { useState } from 'react';

const ProfileEdit = ({ user, onSave, onCancel }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSaveClick = () => {
    const updatedUser = { ...user, name, email };
    onSave(updatedUser);
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ProfileEdit;
