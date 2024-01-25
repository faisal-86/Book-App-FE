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
import About from './pages/About';
import Home from './pages/Home';
import ProfilePage from './components/registration/Profile';
import Category from './pages/category/Category'
import Book from './pages/book/Book';
import Dropdown from './components/registration/Dropdown';

import BookCreateForm from './pages/book/BookCreateForm';import MyEpubReader from './pages/book/ReactReader'; // The path to your MyEpubReader component
import { EpubProvider } from './pages/book/EpubContext'; // Adjust the path as per your project structure






import BookDetail from './pages/book/BookDetail';
import Library from './pages/library/Library';

// import { useNavigate } from 'react-router-dom';


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
// const [isEdit, setIsEdit] = useState(false);
// const [isEditUser , setIsEditUser] = useState(false);

const fetchUserData = (id) => {
  console.log('fetching user data');
  Axios.get("/user/detail", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      console.log('fetchUserData then');
      setuserData(response.data.userDetails);
      setIsAuth(true);
    })
    .catch((error) => {
      console.log(error);
      // Handle error (e.g., redirect to login page)
    });
};

const getUser = () => {
  const token = getToken();
  //need to install jwtDecode (npm i jwt-decode) in the F.E.
  return token ? jwtDecode(token).user : null;
}
const getToken = () => {
  const token = localStorage.getItem("token");
  console.log("TOOOOOKEN",token)
  return token;
}
useEffect(() => {
  console.log(isAuth)
const guser = getUser();
  //if there is a user then keep everything in check
  if(guser != null){
    setIsAuth(true);
    setUser(guser);
    setUserRole(userRole);
    console.log("the user is",guser)
  fetchUserData(guser.id);
  } else {
    //else set to false/null and remove token from local storage
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  }

}, []);

// const editView = (id) => {
//   console.log("passToken",passToken());
//   Axios.get(`user/edit?id=${id}`, passToken())
//   .then( ( res ) => {
//       console.log("Loaded User Profile  Information");
//       console.log(res.data.user);
//       let user = res.data.user;
//       setIsEdit(true);
//   })
//   .catch((error) => {
//       console.log("Error loading user Information: ");
//       console.log(error);
//   })
// }


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
      const guser = getUser();
      console.log('login', guser)
      if(guser){
        setSignedUp(false);
        guser ? setIsAuth(true) : setIsAuth(false);
        guser ? setUser(guser) : setUser(null);
        fetchUserData(guser.id);
        navigate('/home');
      }
    }
  })
  .catch(( error ) => {
    console.log(error);
    //reset the user and log them out when there is any error with login handling
    setIsAuth(false);
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

  setuserData(null)
  navigate('/home');

};




console.log("MOO",user)
  
  return(
    <>

<nav className="bg-dark text-white py-4"> 
<Link to="home" style={{textDecoration: 'none' , color:'white'}}>      
  <h1 className='NovHeader'>NovaGram</h1>
  </Link> 
  <div className="container">

    <div className="row">
      <div className="col">

        
        <div className="row">
          
          <div style={{}}>

            <Link to="/home" className='homelink' style={{ fontSize: '25px', padding: '10px', color: 'white' }}>
              <i className="bi bi-house-door-fill">Home</i>
<EpubProvider> {/* Start wrapping your components inside EpubProvider */}
    <>
    
            </Link>
            <Link to="category" className='homelink' style={{ fontSize: '25px', padding: '10px', color: 'white' }}>
              <i className="bi bi-collection">Category</i>
            </Link>
            <Link to="/book" className='homelink' style={{ fontSize: '25px', padding: '10px', color: 'white' }}>
              <i className="bi bi-book">Books</i>
            </Link>
          </div>
        </div>
      </div>
      <div className="col reper">
        <div className="row justify-content-end">
          <div>
            {isAuth ? (
              <div>
                <Link to="/profile" className="homelink">
                  <i className="bi bi-person-fill" style={{ fontSize: '25px', padding: '10px', color: 'white' }}>Profile</i>
                </Link>
                <Link to="/library" className="homelink">
                  <i className="bi bi-bookmark-heart-fill" style={{ fontSize: '25px', padding: '10px', color: 'white' }}> Library</i>
                </Link>
                <Link className="homelink" onClick={onLogoutHandler}>
                  <i className="bi bi-door-closed-fill" style={{ fontSize: '25px', color: 'white' }}>Log-Out</i>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/signup" className="homelink" style={{ fontSize: '25px', color: 'white' }}>
                  <i className="bi bi-sign-intersection-fill">Sign-Up</i>
                </Link>
                <Link to="/signin" className="homelink" style={{ fontSize: '25px', padding: '20px', color: 'white' }}>
                  <i className="bi bi-door-open">Sign-In</i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>


    <div className="container-fluid p-0">
      <main>
        <Routes>

          <Route path="/signup" element={signedUp ? <Signin login={loginHandler} warning={warning} /> : <Signup register={registerHandler} />}></Route>
          <Route path="/signin" element={<Signin login={loginHandler} />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path='/home' element={<Home/>}> </Route>
          <Route path='/profile' element={<ProfilePage user={user}/>}></Route>

          <Route path='/category' element={<Category isAdmin={userData?.role === 'admin'}/>}></Route>
          <Route path="/category/add" element={<CategoryCreateForm userData={userData} />} />
          <Route path='/category/view/:id' element={<CategoryDetail/>}></Route>
          <Route path='/category/books/:categoryId' element={<CategoryDetail/>}/>
          <Route path='/book' element={<Book isAdmin={userData?.role === 'admin'}/>}></Route>
          <Route path='/book/show/:id' element={<BookDetail/>}></Route>
          <Route path="/book/add" element={<BookCreateForm userData={userData} />} />
          <Route path="/library" element={<Library userData={userData} />} />
          {/* Correct MyEpubReader route */}
          <Route path="/reader" element={<MyEpubReader />} />
        </Routes>
      </main>
    </div>


      </>

    </EpubProvider>
  );
}
