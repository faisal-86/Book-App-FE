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
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card bg-light text-dark">
          <div className="card-body">
            <form onSubmit={loginHandler} autoComplete="off">
              <h1 className="text-center mb-4">Sign in</h1>

              <div className="mb-4">
                <label htmlFor="emailAddress" className="form-label">Email address</label>
                <input type="email" className="form-control" id="emailAddress" name="emailAddress" onChange={handleChange} required />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={handleChange} required />
              </div>

              <button type="submit" className="btn btn-primary w-100" data-bs-dismiss={props.showModal}>Login</button>
            </form>

            <p className="text-danger text-center mt-5">{props.warning}</p>
          </div>
        </div>
      </div>
    </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

  </div>
);
}