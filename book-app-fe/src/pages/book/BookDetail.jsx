import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
                <td>{ book.title}</td>
              </tr>
              <tr>
                <th>Author</th>
                <td>{ book.author}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{ book.description}</td>
              </tr>
              <tr>
                <th>ISBN</th>
                <td>{book.isbn}</td>
              </tr>
              <tr>
                <th>Publish Date</th>
                <td>{ book.publish_date}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{book.category?.name}</td>
              </tr>
              
              
            </tbody>
          </table>
        </div>
      </div>

      {/* Chapter List Section */}
      <div className="row mt-4 bg-light text-dark mb-5">
        <div className="col-md-12">
          <h2>Chapter List</h2>
          {book.chapters && book.chapters.length > 0 ? (
            <ul>
              {book.chapters.map((chapter, index) => (
                <li key={index}>{chapter}</li>
              ))}
            </ul>
          ) : (
            'No chapters available'
          )}
        </div>
      </div>
      
          {/* User Comments Section */}
      <div className="row mt-4 bg-light">
        <div className="col-md-12">
          <h2>Comments</h2>
          {/* Include your comment input and display components here */}
          <textarea
            className="form-control mb-2"
            rows="4"
            placeholder="Add your comment..."
          ></textarea>
          {/* Button to submit a comment */}
          {/* onClick={handleAddComment} */}
          <button className="btn btn-primary"> 
            Add Comment
          </button>
          {/* Display existing comments, if any */}
          <div>
            {/* Example comment */}
            <div className="row mb-2 ms-5">
              <strong className='mb-3'> ابو فستوق</strong> This book is amazing!
              <strong className='mb-3'> alii:</strong> i hate it 
              <strong className='mb-3'> jaja85:</strong> 9/10
              <strong className='mb-3'>Sara:</strong> were the is chapter 15456
            </div>
            {/* Add more comments as needed */}
          </div>
        </div>
      </div>

    </div>
  );
}
