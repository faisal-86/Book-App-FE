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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-light text-dark">
            <div className="card-body">
              <form onSubmit={registerHandler} autoComplete="off">
                <h1 className="text-center mb-4">Sign Up</h1>

                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="emailAddress" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="emailAddress" name="emailAddress" onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Phone Number (Optional)</label>
                  <input type="string" className="form-control" id="phoneNumber" name="phoneNumber" onChange={handleChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password" minLength={6} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn-primary w-100 py-2">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  </>
);
}