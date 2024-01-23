// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// export default function Profile() {
//   const [user] = useState({
//     id: 123,
//     username: 'john_doe',
//     email: 'john@example.com',
//   });
//   const [history] = useState([
//     { id: 1, title: 'Book 1', author: 'Author 1' },
//     { id: 2, title: 'Book 2', author: 'Author 2' },
//     // Add more book entries as needed
//   ]);

//   const [favorites] = useState([
//     { id: 3, title: 'Book 3', author: 'Author 3' },
//     { id: 4, title: 'Book 4', author: 'Author 4' },
//     // Add more book entries as needed
//   ]);

//   return (
//     <div class="container emp-profile">

// <form method="post">
//                 <div class="row">
//                     <div class="col-md-4">
//                         <div class="profile-img">
//                             <img src="https://i.imgur.com/ptTrzDx.jpg" alt=""/>
//                             <div class="file btn btn-lg btn-primary">
//                                 Change Photo
//                                 <input type="file" name="file"/>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-md-6">
//                         <div class="profile-head">
//                                     <h5>
//                                         Kshiti Ghelani
//                                     </h5>
//                                     <h6>
//                                         Web Developer and Designer
//                                     </h6>
//                                     <p class="proile-rating">RANKINGS : <span>8/10</span></p>
//                             <ul class="nav nav-tabs" id="myTab" role="tablist">
//                                 <li class="nav-item">
//                                     <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
//                                 </li>
//                                 <li class="nav-item">
//                                     <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="col-md-2">
//                         <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col-md-4">
//                         <div class="profile-work">
//                             <p>WORK LINK</p>
//                             <a href="">Website Link</a><br/>
//                             <a href="">Bootsnipp Profile</a><br/>
//                             <a href="">Bootply Profile</a>
//                             <p>SKILLS</p>
//                             <a href="">Web Designer</a><br/>
//                             <a href="">Web Developer</a><br/>
//                             <a href="">WordPress</a><br/>
//                             <a href="">WooCommerce</a><br/>
//                             <a href="">PHP, .Net</a><br/>
//                         </div>
//                     </div>
//                     <div class="col-md-8">
//                         <div class="tab-content profile-tab" id="myTabContent">
//                             <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>User Id</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>Kshiti123</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Name</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>Kshiti Ghelani</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Email</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>kshitighelani@gmail.com</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Phone</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>123 456 7890</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Profession</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>Web Developer and Designer</p>
//                                             </div>
//                                         </div>
//                             </div>
//                             <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Experience</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>Expert</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Hourly Rate</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>10$/hr</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Total Projects</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>230</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>English Level</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>Expert</p>
//                                             </div>
//                                         </div>
//                                         <div class="row">
//                                             <div class="col-md-6">
//                                                 <label>Availability</label>
//                                             </div>
//                                             <div class="col-md-6">
//                                                 <p>6 months</p>
//                                             </div>
//                                         </div>
//                                 <div class="row">
//                                     <div class="col-md-12">
//                                         <label>Your Bio</label><br/>
//                                         <p>Your detail description</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>  



    
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile(props) {
        console.log("props.userid",props.user);

  const [user, setUser] = useState({
    id: '',
    username: '',
    email: '',
    // Add other user properties
  });

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await Axios.get('/user/detail?id='+props.user.id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        console.log(response.data, 'data response');
        if (response.data.user) {
          setUser(response.data.user);
        } else {
          console.log('User data not found');
          // Handle the case where user data is not available
        }
      } catch (error) {
        console.error(error);
        // Handle error (e.g., redirect to login page)
      }
    };
  
    if(props.user.hasOwnProperty('id')){
          fetchUserData();
    }
  }, [props.user]);
  

  return (
    <div className="container emp-profile">
      <div className="row">
        <div className="col-md-6">
          <label>User Id</label>
        </div>
        <div className="col-md-6">
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Name</label>
        </div>
        <div className="col-md-6">
          <p>{user.username}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Email</label>
        </div>
        <div className="col-md-6">
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}
