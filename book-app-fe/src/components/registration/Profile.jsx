import React, { useState } from 'react';


export default function Profile() {
    const [user] = useState({
        id: 123,
        username: 'john_doe',
        email: 'john@example.com',
      });
      const [history] = useState([
        { id: 1, title: 'Book 1', author: 'Author 1' },
        { id: 2, title: 'Book 2', author: 'Author 2' },
        // Add more book entries as needed
      ]);
    
      const [favorites] = useState([
        { id: 3, title: 'Book 3', author: 'Author 3' },
        { id: 4, title: 'Book 4', author: 'Author 4' },
        // Add more book entries as needed
      ]);
  return (

    <div>
  

      <div className="profile-header">
        <img src="../public/logo192.png" alt="Avatar" />
        <h2>{user.firstName}</h2>
        <h2>{user.lastName}</h2>

      </div>

      <div className="profile-section">
        <h3>Account</h3>
        <ul>
          <li>User ID: {user.id}</li>
          <li>Email: {user.emailAddress}</li>
        </ul>
      </div>

      <div className="profile-section">
        <h3>History</h3>
        <ul>
          {history.map((book) => (
            <li key={book.id}>{`${book.title} by ${book.author}`}</li>
          ))}
        </ul>
      </div>

      <div className="profile-section">
        <h3>Favorites</h3>
        <ul>
          {favorites.map((book) => (
            <li key={book.id}>{`${book.title} by ${book.author}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
