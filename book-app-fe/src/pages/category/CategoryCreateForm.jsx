import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


export default function CategoryCreateForm(props) {
  const [newCategory, setNewCategory] = useState([]);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const category = { ...newCategory };
    category[e.target.name] = e.target.value;
    setNewCategory(category);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    addCategory(newCategory);
  };

  function addCategory(category) {
    Axios.post('/category/create', category, props.headers)
    .then((category) => {
      console.log(category);
      navigate('/category/detail')
    })
  }

  
  return (
    <div className="container mt-5">
    <h2>Create New Category</h2>
    <form onSubmit={handleAddCategory}>
      <div className="mb-3">
        <label className="form-label">Category Name:</label>
        <input type="text" className="form-control" name="title"  onChange={handleChange} placeholder="Enter category name"/>
      </div>

    

      

      <div>
        <label className="form-label my-3" htmlFor="categoryImage">
          Category Image
        </label>
        <input
          type="file"
          name="image"
          className="form-control"
          onChange={handleChange}
          placeholder="Add category image"
        />
      </div>

      <div>
      <input className='btn btn-primary my-3' type="submit" value="Create Category"/>
      </div>

    </form>
  </div>

  )
}
