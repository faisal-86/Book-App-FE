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
