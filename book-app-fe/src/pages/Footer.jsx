import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
  
    <footer className="bg-dark text-white py-2 fixed-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <h5>About Novagram</h5>
              <p>
                Novagram is your ultimate destination for discovering and enjoying a vast collection of e-books. Explore various categories and immerse yourself in the world of literature.
              </p>
            </div>
            <div className="col-md-6">
              <h5>Contact Us</h5>
              <address>
                <p>Email: info@novagram.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </address>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-end">
          <img src="./logo-white.png" alt="nOVAagram Logo" style={{ height:'160px', padding: '5px' }} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h5 className="mt-2">Follow Us</h5>
          <p>Stay connected with us on social media for the latest updates and book recommendations.</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid text-center mt-1">
      <p className="mb-0">Novagram &copy; 2024 | <code className="text-danger">SEI7 Project 4</code></p>
    </div>
  </footer>
    )
}
