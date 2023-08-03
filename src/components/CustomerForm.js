import React, { useState } from 'react';

const CustomerForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the customer details here (e.g., save to database, display an alert, etc.)
    alert(`
      Name: ${name}
      Age: ${age}
      Profession: ${profession}
      Gender: ${gender}
    `);
    onClose();
  };

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="profession">Profession:</label>
            <input type="text" id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
