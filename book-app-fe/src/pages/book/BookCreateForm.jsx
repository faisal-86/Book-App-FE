import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function BookCreateForm(props) {
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: '',
    isbn: '',
    publish_date: '',
    category: '',
    image: null,
    epubFile: null
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    Axios.get('/category/index')
    .then(response => {
      setCategories(response.data.categories);
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });
  };

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setNewBook({ ...newBook, [e.target.name]: e.target.files[0] });
    } else {
      setNewBook({ ...newBook, [e.target.name]: e.target.value });
    }
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in newBook) {
      formData.append(key, newBook[key]);
    }

    addBook(formData);
  };

  function addBook(formData) {
    Axios.post('/book/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...props.headers
      }
    })
    .then(response => {
      console.log(response.data);
      navigate('/book/index');
    })
    .catch(error => {
      console.error('Error adding book:', error);
    });
  }

  return (
    <div className="container mt-5">
      <h2>Add New Book</h2>
      <form onSubmit={handleAddBook}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" name="title" value={newBook.title} onChange={handleChange} placeholder="Enter book name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Author:</label>
          <input type="text" className="form-control" name="author" value={newBook.author} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea className="form-control" name="description" value={newBook.description} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">ISBN:</label>
          <input type="text" className="form-control" name="isbn" value={newBook.isbn} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Publish Date:</label>
          <input type="date" className="form-control" name="publish_date" value={newBook.publish_date} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select className="form-control" name="category" value={newBook.category} onChange={handleChange}>
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="bookImage">Book Cover:</label>
          <input type="file" className="form-control" name="image" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="epubFile">Upload EPUB File:</label>
          <input type="file" className="form-control" name="epubFile" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary my-3">Create Book</button>
      </form>
    </div>
  );
}
