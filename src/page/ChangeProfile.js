// Profile.js
import React, { useState } from 'react';
import ProfileEdit from './ProfileEdit';

const ChangeProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedUser) => {
    // Save the updated user profile (e.g., make an API call here)
    console.log('Updated User:', updatedUser);
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing ? (
        <>
          <h1>Profile</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleEditClick}>Edit Profile</button>
        </>
      ) : (
        <ProfileEdit user={user} onSave={handleSave} onCancel={() => setIsEditing(false)} />
      )}
    </div>
  );
};

export default ChangeProfile;
