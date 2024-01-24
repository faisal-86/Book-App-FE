// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";




// export default function App() {
// const [signedUp, setSignedUp] = useState(false);
// const [user, setUser] = useState({});
// const [isAuth, setIsAuth] = useState(false);
// const navigate = useNavigate();

// const onLogoutHandler = (e) => {
//   e.preventDefault();
//   localStorage.removeItem("token");
//   setSignedUp(false);
//   setIsAuth(false);
//   setUser(null);
//   navigate('/home');
// };



//   const Dropdown = (
//     <div className="dropdown-content">
//       <a href="/profile">Profile</a>
//       <a href="/profile/histroy">History</a>
//       <Link onClick={onLogoutHandler}>logout</Link>
      
//     </div>
//   );

// // {isAuth ? 
// //   <>
// //       <div className="dropdown-content">
// //       <a href="/profile">Profile</a>
// //       <a href="/profile/histroy">History</a>
// //       <Link onClick={onLogoutHandler}>logout</Link>
// //     </div>
// //   :
// //   <div className="dropdown-content">
// //   <a href="/profile">Profile</a>
// //   <a href="/profile/histroy">History</a>
// //   <Link onClick={onLogoutHandler}>logout</Link>
  
// // </div>
// //   </> 

// // }


//   return (
//     <div className="dropdown">
//       <Link className="btn btn-outline-success me-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         <i className="bi bi-box-arrow-in-right"></i>
//       </Link>
//       {Dropdown}
//     </div>
//   );

// }
