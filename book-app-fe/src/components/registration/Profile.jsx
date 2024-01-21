import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function UserEditForm(props) {

const navigate = useNavigate();

const [user, setEditUser] = useState(props.user);

const handleChange = (event) => {
  //define the attributes from the form you need
  const attributeToChange = event.target.name;
  //define the values for those attributes
  const editValue = event.target.value;

  const updatedUser = {...user};
  updatedUser[attributeToChange] = editValue;
  // console.log(updatedUser);
  setEditUser(updatedUser);
}

const handleSubmit = (event) => {
    event.preventDefault();
    props.updateUserProfile(user);
    props.setIsEdit(false);
    navigate('/');
}

return (
<>
<div className="container py-5 mb-5">
<h5><FontAwesomeIcon icon="pencil" /> Edit User Profile</h5>


<div className="table center">

<form onSubmit={handleSubmit} autoComplete="off">
<div className="mb-3 pb-1">
    <label htmlFor="firstName" className="form-label">First Name</label>
    <input className="form-control" id="firstName" name="firstName" type="text" onChange={handleChange} value={user.firstName} required />
</div>
<div className="mb-3 pb-1">
    <label htmlFor="lastName" className="form-label">Last Name</label>
    <input className="form-control" id="lastName" name="lastName" type="text" onChange={handleChange} value={user.lastName} required />
</div>

<div className="mb-3 pb-1">
    <label htmlFor="emailAddress" className="form-label">Email Address</label>
    <input className="form-control" id="emailAddress" name="emailAddress" type="email" onChange={handleChange} value={user.emailAddress} required />
</div>

<div className="mb-3 pb-1">
    <label htmlFor="password" className="form-label">Reset Password (Optional)</label>
    <input className="form-control" id="password" name="password" type="password" onChange={handleChange} value={null} />
</div>


<div className="mb-3 pb-1">
    <label htmlFor="phoneNumber" className="form-label">Phone Number (Optional)</label>
    <input className="form-control" id="phoneNumber" name="phoneNumber" type="number" onChange={handleChange} value={user.phoneNumber} />
</div>

  <br />
   <button className="btn btn-warning" type="submit">Update</button>
</form>

</div>
</div>
</>
)
}
