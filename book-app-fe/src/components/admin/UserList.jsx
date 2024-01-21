import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

import User from './User';
import UserEditForm from './UserEditForm';

export default function UserList(props) {

const [users, setUsers] = useState([]);
//const [isUserEdit, setIsUserEdit] = useState(false); //this is used for Edit
const [currentUser, setCurrentUser] = useState({}); //this is used to set the content for the Edit form

const passToken = { headers: { "Authorization": "Bearer " + localStorage.getItem("token")}};

useEffect(() => {
//call API
loadUserList();

},[]); //this end array is the conditional option

//using axios for the API fetching GET 
const loadUserList = () => {
Axios.get("user/index", passToken)
    .then((response) => {
    console.log(response);
    setUsers(response.data.users);
    })
    .catch((error) => {
    console.log(error);
    })
};

//create the API for creating the User
const addUser = (user) => {
  Axios.post("user/add", user, passToken) //this is passToken defined earlier
  .then((response) => { 
      console.log("User Added Successfully!");
      loadUserList();
      })
  .catch((error) => {
      console.error("Error Adding User: " + error);
      })
}

//create the API for preparing the content for the Edit Form
const editView = (id) => {
  console.log(passToken)
  Axios.get(`user/edit?id=${id}`, passToken)
  .then( ( res ) => {
      console.log("Loaded User Information");
      console.log(res.data.user);
      let user = res.data.user;
      props.setIsUserEdit(true);
      setCurrentUser(user);
  })
  .catch((error) => {
      console.log("Error loading user Information: ");
      console.log(error);
  })
}

//create the API for Update User 
const updateUser = (user) => {
  Axios.put("user/update",user, passToken)
  .then(( res ) => {
      console.log("User Updated Successfully!");
      console.log(res);
      loadUserList();
      props.setIsUserEdit(false); //reset to hide the form again
  })
  .catch((error) => {
      console.log("Error Updating User Information: ");
      console.log(error); 
  })
}

//create Delete API to Delete User
const deleteUser = (id) => {
  Axios.delete(`user/delete?id=${id}`, passToken)
  .then(( res ) => {
      console.log("User Deleted Successfully!");
      loadUserList();
  })
  .catch((error) => {
      console.log("Error finding the User Information: ");
      console.log(error);
  })
}

const allUsers = users.map((user, index) => (
  <tr key={index}>
      <User {...user} index={index+1} editView={editView} deleteUser={deleteUser} />
  </tr>    
))

  return (
    
<>
<div className="container py-5 mb-5">

{(props.isUserEdit) ? 
    <UserEditForm key={currentUser._id} user={currentUser} updateUser={updateUser} isUserEdit={props.isUserEdit} setIsUserEdit={props.setIsUserEdit} /> 
    : 
<>
<h5>Admin User List</h5>
<table className="table">
<tbody>
    <tr className="table-primary">
        <th>No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Type</th>
        <th>Created</th>
        <th>Updated</th>
        <th>Actions(s)</th>
    </tr>
        {allUsers}
    </tbody>
</table>
</>
}
</div>
</>

  )
}
