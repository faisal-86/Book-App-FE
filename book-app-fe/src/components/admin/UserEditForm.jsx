import React, { useState } from 'react'

export default function UserEditForm(props) {
  const [userData , setUserDate] = useState({});
  const [formData, setFormData] = useState({
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    emailAddress: userData.emailAddress || '',
    phoneNumber: userData.phoneNumber || '',
    password: '', 
    role: userData.role || '',
    book: userData.book || '',
    library: userData.library || '',
  });


  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(true);

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    if (!formData.emailAddress.trim()) {
      errors.emailAddress = 'Email Address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.emailAddress)) {
      errors.emailAddress = 'Invalid email format';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format';
    }

    // Add more validation rules for other fields

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };



  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input type="text" name="firstName" value={formData.firstName}  onChange={handleChange}  className="form-control" />
          {formErrors.firstName && <span style={{ color: 'red' }}>{formErrors.firstName}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" />
          {formErrors.lastName && <span style={{ color: 'red' }}>{formErrors.lastName}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address:</label>
          <input type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className="form-control" />
          {formErrors.emailAddress && <span style={{ color: 'red' }}>{formErrors.emailAddress}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control"/>
          {formErrors.phoneNumber && <span style={{ color: 'red' }}>{formErrors.phoneNumber}</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password"  name="password"  value={formData.password}  onChange={handleChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Role:</label>
          <input type="text" name="role" value={formData.role} onChange={handleChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Book:</label>
          <input type="text" name="book" value={formData.book} onChange={handleChange} className="form-control"/>
        </div>

        <div className="mb-3">
          <label className="form-label">Library:</label>
          <input type="text"  name="library"  value={formData.library}  onChange={handleChange} className="form-control" />
        </div>

        <div className="mb-3">
          <button type="submit" style={{float: 'right' , margin:'20'} } className="btn btn-primary">
            Update User
          </button>
        </div>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  );
};