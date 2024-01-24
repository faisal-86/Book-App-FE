import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

export default function BookCard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('/book/index')
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Link className="btn btn-success" to="add">
          Add Book
        </Link>
      </div>

      <div className="mt-4">
        <Row xs={5} md={2} lg={5} className="g-1">
          {books.map((book) => (
            <Col key={book._id} className="mb-4">
              <Card style={{ width: '20rem', maxHeight: '100%' }}>
                <Link to={`/book/show/${book._id}`}>
                  <Card.Img
                    src={book.image[0]}
                    alt={`Cover for ${book.title}`}
                    style={{ objectFit: 'cover', height: '500px' }} // Set a fixed height here
                  />
                </Link>
                <Card.Body>
                  <h5 className="card-title">{book.title}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
