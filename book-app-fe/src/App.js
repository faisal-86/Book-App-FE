import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import  Axios  from 'axios';
import {jwtDecode} from "jwt-decode"
import React from 'react'
import Signup from './components/registration/SignUp';
import Signin from './components/registration/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import BookEditForm from './pages/book/BookEditForm';

const passToken =() => { 
  return { headers: { "Authorization": "Bearer " + localStorage.getItem("token")}};
}

export default function App() {
const [signedUp, setSignedUp] = useState(false);
const [user, setUser] = useState({});
const [isAuth, setIsAuth] = useState(false);
const [userRole, setUserRole] = useState(0);
const [userData, setuserData] = useState({});
const navigate = useNavigate();
const [warning, setWarning] = useState('');
const [isEdit, setIsEdit] = useState(false);
const [isEditUser , setIsEditUser] = useState(false);

const fetchUserData = (id) => {
  Axios.post("user/fetch", { userID: id })
  .then((response) => {
    setuserData(response.data.userDetails);
    setIsAuth(true);
  })
  .catch((error) => {
    console.log(error);
  })
}
const getUser = () => {
  const token = getToken();
  //need to install jwtDecode (npm i jwt-decode) in the F.E.
  return token ? jwtDecode(token).user : null;
}
const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
}
useEffect(() => {
const user = getUser();
  //if there is a user then keep everything in check
  if(user){
    setIsAuth(true);
    setUser(true);
    setUserRole(userRole);
  fetchUserData(user.id);
  } else {
    //else set to false/null and remove token from local storage
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  }

}, []);

const editView = (id) => {
  console.log("passToken",passToken());
  Axios.get(`user/edit?id=${id}`, passToken())
  .then( ( res ) => {
      console.log("Loaded User Profile  Information");
      console.log(res.data.user);
      let user = res.data.user;
      setIsEdit(true);
  })
  .catch((error) => {
      console.log("Error loading user Information: ");
      console.log(error);
  })
}


const loginHandler = (credentials) => {
  Axios.post("auth/signin", credentials)
  .then(( response ) => {
    console.log(response.data.token);
    setWarning('There was an Error! Please try again.');
    setSignedUp(false);
    //we need to validate the token
    let token = response.data.token;
    if(token != null){
      //store the token in the browser local storage
      localStorage.setItem("token", token);
      const user = getUser();
      if(user){
        setSignedUp(false);
        navigate('/');
        fetchUserData(user.id);
      user ? setIsAuth(true) : setIsAuth(false);
      user ? setUser(user) : setUser(null);

      }
    }
  })
  .catch(( error ) => {
    console.log(error);
    //reset the user and log them out when there is any error with login handling
    setIsAuth(false);
    setUser(false);
    setUser(null);
  })
}
const registerHandler = (user) => {
  Axios.post("auth/signup", user)
  .then((response) => {
    //console.log(response);
    setSignedUp(true);

    navigate('/signin');

    //from here we can do useNavigate using hooks like navigate("/") >>>
  })
  .catch((error) => {
    console.log(error);
  })
}
const onLogoutHandler = (e) => {
  e.preventDefault();
  localStorage.removeItem("token");
  setSignedUp(false);
  setIsAuth(false);
  setUser(null);
  navigate('/');
}




  
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          <span className="fs-2">Novagram</span>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {isAuth ? (
              <>
                {userData.userType <= 3 ? (
                  <>
                    <li className="nav-item">
                      <Link to="/" className="btn btn-bd-primary me-2">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/user" onClick={() => { setIsEditUser(false); setIsEditUser(false) }} className="btn btn-light me-2">Records</Link>
                    </li>
                  </>
                ) : null}

                {userData.userType === 1 ? (
                  <li className="nav-item">
                    <Link to="/user" onClick={() => { setIsEditUser(false) }} className="btn btn-bd-primary me-2">Users</Link>
                  </li>
                ) : null}

                <li className="nav-item">
                  <Link to="/profile" className="profile_img btn me-2" onClick={() => { editView(userData._id) }}></Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="btn btn-outline-danger" onClick={onLogoutHandler}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/signup" className="btn btn-warning me-2">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="btn btn-outline-success me-2">Login</Link>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-bd-primary me-2 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal">About</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>


    <div className="container-fluid p-0">
      <main>
        <Routes>
          <Route path="/signup" element={signedUp ? <Signin login={loginHandler} warning={warning} /> : <Signup register={registerHandler} />}></Route>
          <Route path="/signin" element={isAuth ? <Dashboard userData={userData} /> : <Signin login={loginHandler} />}></Route>
        </Routes>
      </main>
    </div>
  </>
);
};