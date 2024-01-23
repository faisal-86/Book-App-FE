import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function BookCard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books when the component mounts
    Axios.get('/book/index')
      .then(response => {
        setBooks(response.data.books);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {books.map(book => (
          <div className="card" key={book._id}>
            <Link to={`/book/detail?id=${book._id}`}>
              <img src={book.image[0]} alt={`Cover for ${book.title}`} style={{ height: 200, width: 150 }} />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-text">Author: {book.author}</p>
              <p className="card-text">ISBN: {book.isbn}</p>
              <p className="card-text">Publish Date: {new Date(book.publish_date).toLocaleDateString()}</p>
              <p className="card-text">Category: {book.category ? book.category.name : 'Uncategorized'}</p>
              {/* Add more details as needed */}
            </div>
          </div>
      ))}
    </div>
  );
}
