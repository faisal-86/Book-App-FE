import React from 'react';


export default function Dashboard(props) {


  return (
    <>
<div className="container mt-5">
  
    <h4>Dashboard - <span className="btn btn-primary">{props.userData.userRole == 1 ? "Admin" : props.userData.userRole == 2 ? "User" : props.userData.userRole == 3 ? "Guest" : "" }</span></h4>

    <p>Welcome {props.userData.firstName} {props.userData.lastName},</p>
    
</div>
</>
  )
}
