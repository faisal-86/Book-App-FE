import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import  Axios  from 'axios';
import {jwtDecode} from "jwt-decode"
import React from 'react'
import Signup from './components/registration/SignUp';
import Signin from './components/registration/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import BookEditForm from './pages/book/BookEditForm';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from './pages/About';
import Home from './pages/Home';
import ProfilePage from './components/registration/Profile';
import UserEditForm from './components/admin/UserEditForm';


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
    <nav class="navbar navbar-expand-lg bg-dark w-auto p-4">
  <div class="container-fluid">
  <li className="nav-item">
           <Link to="/about"> <button type="button" className="btn btn-info me-5 px-4 text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">About</button></Link>
            </li>
    
    <Link to="/" class="navbar-brand text-white px-5">Novagram</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        
          </ul>
        
      
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>





<nav class="navla">
  <div class="textbara">
  
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-sm">
            <Link to="/home" className='homelink'><i class="bi bi-house-door-fill"></i></Link>
          </div>
          <div class="col-sm">
            <Link to="category" className='homelink'>Category</Link>
          </div>
          <div class="col-sm">
            <Link to="book" className='homelink'>Books</Link>
          </div>
          <div class="col-sm">
            <Link to="manga" className='homelink'>Manga</Link>
          </div>
        </div>
      </div>

      <div class="col reper">
        <div class="row justify-content-end">
          <div class="col-sm">
            <Link to="/signup" className="btn btn-warning me-2">Sign Up</Link>
          </div>
          <div class="col-sm">
            <Link to="/signin" className="btn btn-outline-success me-2"><i class="bi bi-box-arrow-in-right"></i> Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

   
        


    <div className="container-fluid p-0">
      <main>


        <UserEditForm/>
        <Routes>
          
          <Route path="/signup" element={signedUp ? <Signin login={loginHandler} warning={warning} /> : <Signup register={registerHandler} />}></Route>
          <Route path="/signin" element={isAuth ? <Dashboard userData={userData} /> : <Signin login={loginHandler} />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path='/home' element={<Home/>}> </Route>
          <Route path='/profile' element={<ProfilePage/>}></Route>
          {/* <Route path='/profile' element={isAuth ? <profile userData={userData} /> :  <Signin login={loginHandler} />}></Route> */}
        </Routes>
      </main>
    </div>

<footer  className="text-center text-lg-start bg-body-tertiary text-muted">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Novagram
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

   <div class="text-center p-4">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div> 

</footer>

  </>
);
};