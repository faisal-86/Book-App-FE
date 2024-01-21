import React from 'react';
import { useState } from 'react';

export default function Signup(props) {

const [newUser, setNewUser] = useState({});

const handleChange = (e) => {
    const user = {...newUser};
    user[e.target.name] = e.target.value;
    setNewUser(user);
};

const registerHandler = (event) => {
    event.preventDefault();
    props.register(newUser);
    event.target.reset();
};

  return (
    
<>
<div className="container py-5 mb-5">

<div className="form-signin w-100 m-auto">

<form onSubmit={registerHandler} autoComplete="off">
  
    <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

    <div className="form-floating">
      <input type="text" placeholder="First Name" id="firstName" name="firstName" className="form-control" onChange={handleChange} required />
      <label htmlFor="firstName">First Name</label>
    </div>

    <div className="form-floating">
      <input type="text" placeholder="Last Name" id="lastName" name="lastName" className="form-control" onChange={handleChange} required />
      <label htmlFor="lastName">Last Name</label>
    </div>
  <br />
    <div className="form-floating">
      <input type="email" placeholder="Email" id="emailAddress" name="emailAddress" className="form-control" onChange={handleChange} required />
      <label htmlFor="emailAddress">Email address</label>
    </div>

    <div className="form-floating">
      <input type="number" placeholder="Phone Number" id="phoneNumber" name="phoneNumber" className="form-control" onChange={handleChange} />
      <label htmlFor="phoneNumber">Phone Number (Optional)</label>
    </div>

    <div className="form-floating">
      <input type="password" name="password" id="password" minLength={6} placeholder="Enter Password" className="form-control" onChange={handleChange} required />
      <label htmlFor="password">Password</label>
    </div>

    <button className="btn btn-primary w-100 py-2" type="submit">Register</button>

  </form>
</div>

</div>
</>

  )
}
