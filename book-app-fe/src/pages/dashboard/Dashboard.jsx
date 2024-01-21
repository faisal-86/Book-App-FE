import React from 'react';


export default function Dashboard(props) {


  return (
    <>
<div className="container mt-5">
  
    <h4>Dashboard - <span className="btn btn-primary">{props.userData.userType == 1 ? "Administrator" : props.userData.userType == 2 ? "Scientist" : props.userData.userType == 3 ? "Contributor" : "" }</span></h4>

    <p>Welcome {props.userData.firstName} {props.userData.lastName},</p>
    
</div>
</>
  )
}
