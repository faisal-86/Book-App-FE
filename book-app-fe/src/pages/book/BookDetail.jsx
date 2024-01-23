import React from 'react'
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { Axios } from 'axios';
import axios from 'axios';

export default function BookDetail(props) {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    getBook(id);
  }, [id]);

  function getBook(bookId) {
    axios.get(`/book/detail?id=${bookId}`)
      .then(res => {
        setBook(res.data.book);
      })
      .catch(err => {
        console.log('ERROR');
        console.log(err);
      });
  }


  return (
    
    <div className="container">
      <div className="row">
      <div className="col-md-6 "> 
          {book.image && (
            <div>
              <h4>Book Cover</h4>
              <img
                src={book.image[0]}
                alt={`Cover for ${book.title}`}
                style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h2>Book Details</h2>
          <table className="table">
            <tbody>
              <tr>
                <th>Title</th>
                <td>{props.title || book.title}</td>
              </tr>
              <tr>
                <th>Author</th>
                <td>{props.author || book.author}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{props.description || book.description}</td>
              </tr>
              <tr>
                <th>ISBN</th>
                <td>{props.isbn || book.isbn}</td>
              </tr>
              <tr>
                <th>Publish Date</th>
                <td>{props.publish_date || book.publish_date}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{props.category || (book.category ? book.category.name : 'Uncategorized')}</td>
              </tr>
              <tr>
                <th>Library</th>
                <td>{props.library || book.library}</td>
              </tr>
              <tr>
                <th>Review</th>
                <td>{props.review || book.review}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
=======
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    getBook(id);
  }, [id]);

  function getBook(bookId) {
    Axios.get(`/book/detail?id=${bookId}`)
      .then((res) => {
        setBook(res.data.book);
      })
      .catch((err) => {
        console.log('error getting book data');
        console.log(err);
      });
  }

  return (
    <>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.description}</td>
      <td>{book.isbn}</td>
      <td>{book.publish_date}</td>
      <td>{book.category}</td>
      <td>{book.library}</td>
      <td>{book.review}</td>
    </>
  );
}