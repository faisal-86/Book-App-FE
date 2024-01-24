import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

export default function BookCreateForm(props) {
  const [newBook, setNewBook] = useState([]);
  const [categories, setCategories] = useState([]); // Added state for categories
  const navigate = useNavigate();
  

  useEffect (() => {
    // Fetch categories when the component mounts
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    Axios.get('/category/index')
    .then((response) => {
      setCategories(response.data.categories);
    })
    .catch((error) =>{
      console.error('Error fetching categories:', error);
      
    })
  };

  const handleChange = (e) => {
    const book = { ...newBook };
    book[e.target.name] = e.target.value;
    setNewBook(book);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    addBook(newBook);
  };

  function addBook(book) {
    Axios.post('/book/create', book, props.headers)
    .then((book) => {
      console.log(book);
      navigate('/book/detail')
    })
  }

 
  return (
    <div className="container mt-5">
      <h2>Add New Book</h2>
      <form onSubmit={handleAddBook}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" name="title"  onChange={handleChange} placeholder="Enter book name"/>
        </div>

        <div className="mb-3">
          <label className="form-label">Author:</label>
          <input type="text" className="form-control" name="author"  onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea className="form-control" name="description"  onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">ISBN:</label>
          <input type="text" className="form-control" name="isbn"  onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Publish Date:</label>
          <input type="date" className="form-control" name="publish_date"  onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select type="text" className="form-control" name="category" value={newBook.category}  onChange={handleChange} >

            <option value="">Select Category</option>
            {categories && categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
        </div>

        <div>
          <label className="form-label my-3" htmlFor="bookImage">
            Book Cover
          </label>
          <input
            type="text"
            name="image"
            className="form-control"
            onChange={handleChange}
            placeholder="Add book image"
          />
        </div>

        <div>
        <input className='btn btn-primary my-3' type="submit" value="Create Book"/>
        </div>

      </form>
    </div>
  );
}
