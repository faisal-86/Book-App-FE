import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEpub } from './EpubContext'; // Make sure this path is correct

export default function BookDetail(props) {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const { setEpubPath } = useEpub();
  const navigate = useNavigate();

  useEffect(() => {
    getBook(id);
  }, [id]);

  function getBook(bookId) {
    axios.get(`/book/detail?id=${bookId}`)
      .then(res => {
        setBook(res.data.book);
      })
      .catch(err => {
        console.error('ERROR', err);
      });
  }

  const handleReadClick = () => {
    if (book.epubFilePath) {
      setEpubPath(book.epubFilePath);
      navigate('/reader');
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
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
              {book.epubFilePath && (
                <tr>
                  <td colSpan="2">
                    <button onClick={handleReadClick} className="btn btn-primary" style={{ width: '100%' }}>Start Reading</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

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

      <div className="row mt-4 bg-light">
        <div className="col-md-12">
          <h2>Comments</h2>
          <textarea
            className="form-control mb-2"
            rows="4"
            placeholder="Add your comment..."
          ></textarea>
          <button className="btn btn-primary">Add Comment</button>
          <div>
            {/* Existing comments */}
          </div>
        </div>
      </div>

    </div>
    
  );
}
