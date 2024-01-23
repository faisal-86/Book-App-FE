import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const dropdownContent = (
    <div className="dropdown-content">
      <a href="/profile">Profile</a>
      <a href="/profile/histroy">History</a>
      <a href="/Logout">logout</a>
    </div>
  );

  return (
    <div className="dropdown">
      <Link className="btn btn-outline-success me-2 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="bi bi-box-arrow-in-right"></i>
      </Link>
      {dropdownContent}
    </div>
  );
};

export default Dropdown;
