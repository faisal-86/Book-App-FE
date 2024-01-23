import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default function BookCard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/book/index')
      .then(response => {
        setBooks(response.data.books);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []); 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '10px', paddingBottom: '200px' }}>
      {books.map(book => (
        <div key={book._id}>
          <Card style={{ width: '18rem', maxHeight: '100%' }}>
            <Link to={`/book/show/${book._id}`}>
              <img src={book.image[0]} alt={`Cover for ${book.title}`} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
            </Link>
            <div className="card-body" style={{ maxHeight: '50px' }}>
              <h5 className="card-title">{book.title}</h5>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}