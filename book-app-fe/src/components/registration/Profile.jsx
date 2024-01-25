import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile(props) {
  console.log("props.userid", props.user);

  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Axios.get(`/user/detail?id=${props.user.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log(response.data, "data response");

        if (response.data && response.data.user) {
          setUser(response.data.user);
        } else {
          console.log("User data not found");
          // Handle the case where user data is not available
        }
      } catch (error) {
        console.error(error);
        // Handle error (e.g., redirect to login page)
      }
    };

    // Check if props.user has the 'id' property before calling fetchUserData
    if (props.user && props.user.id) {
      fetchUserData();
    }
  }, [props.user]);

  return (
    <div className="container mt-4" style={{ display: 'flex' }}>
  <div className="card" style={{ width: '350px' }}>
    <img
      src="./logo-white.png"
      className="card-img-top"
      alt="User Avatar"
      style={{ height: '100%',borderRadius:'200px' }}
    />
  </div>
  <div className="card" style={{ flex: '1', marginLeft: '10px' }}>
    <div className="card-body">
      <h5 className="card-title" style={{ fontSize: '25px' }}>User Name: {user.firstName}</h5>
      <p className="card-text" style={{ fontSize: '25px', fontWeight:'bold' }}>Email: {user.emailAddress}</p>
      <p style={{ fontSize: '25px', fontWeight:'bold' }}>Phone Number: {user.phoneNumber}</p>
    </div>
  </div>
</div>

  )
  }
