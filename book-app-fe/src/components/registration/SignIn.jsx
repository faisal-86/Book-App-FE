import React from 'react';
import { useState } from 'react';

export default function Signin(props) {

const [newUser, setNewUser] = useState({});

const handleChange = (e) => {
    const user = {...newUser};
    user[e.target.name] = e.target.value;
    setNewUser(user);
};

const loginHandler = (event) => {
    event.preventDefault();
    props.login(newUser);
    event.target.reset();
};



return (
  <div className="container">
    <div className="row">
      <div>
        <form className="form-signin" onSubmit={loginHandler} autoComplete="off">
          <h1 className="h3 mb-3 fw-normal text-center">Sign in</h1>
          <div className="form-floating mb-3">
            <input type="email" placeholder="Email" id="emailAddress" name="emailAddress" className="form-control" onChange={handleChange} required />
            <label htmlFor="emailAddress">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" name="password" id="password" placeholder="Enter Password" className="form-control" onChange={handleChange} required />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn btn-primary w-100" type="submit" data-bs-dismiss={props.showModal}>Login</button>
        </form>
        <p className="text-danger text-center mt-3">{props.warning}</p>
      </div>
      <div className='imageC'>
      </div>
    </div>
  </div>
);
}