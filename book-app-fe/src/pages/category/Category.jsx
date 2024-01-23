import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default function Category(props) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get('/category/index')
      .then(response => {
        console.log(response.data)
        setCategory(response.data.category);
      })
      .catch(error => {
        console.error('Error fetching category:', error);
      });
  }, []); 

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', 
    alignItems: 'center', height: '100vh', gap: '10px', paddingBottom: '200px' }}>
{
  console.log('MOO===================')}{
  console.log(category)
}
{category.map(category => (
      <div key={category._id}>
        <Card style={{ width: '18rem', maxHeight: '100%' }}>
          <Link to={`/category/view/${category._id}`}>
            <img src={category.image[0]} alt={`Cover for ${category.name}`} 
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
          </Link>
          <div className="card-body" style={{ maxHeight: '50px' }}>
            <h5 className="card-title">{category.name}</h5>
          </div>
        </Card>
      </div>
    ))}
  

    </div>

  )
}

