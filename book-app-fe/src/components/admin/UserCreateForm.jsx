import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserCreateForm(props) {
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    password: '',
    role: '',
    book: '',
    library: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <br />

      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
      </label>
      <br />

      <label>
        Email Address:
        <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
      </label>
      <br />

      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </label>
      <br />

      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />

      <label>
        Role:
        <input type="text" name="role" value={formData.role} onChange={handleChange}/>
      </label>
      <br />

      <label>
        Book:
        <input type="text"  name="book"  value={formData.book}  onChange={handleChange} />
      </label>
      <br />

      <label>
        Library:
        <input type="text" name="library" value={formData.library} onChange={handleChange}/>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

