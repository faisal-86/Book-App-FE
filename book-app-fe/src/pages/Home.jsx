import React from 'react'
import Card from 'react-bootstrap/Card';
import Category from './category/Category';
import BookCard from './book/Book';


export default function Home() {
    return (

      <div className="cardhome">
        
        <div className="catediv">
        <div className=' navbar-light bg-light w-75 ms-5 d-flex align-items-center justify-content-center'>
          <h2><i class="bi bi-bookmark"></i>Category</h2>
          </div>
        <div>
          <Category></Category>
        </div>

        </div>

        <div className="rdbook ">
          <div className=' navbar-light bg-light w-75 ms-5 d-flex align-items-center justify-content-center'>
          <h2><i class="bi bi-bookmark"></i>New Book</h2>
          </div>
        <div>
          <BookCard></BookCard>
          
    </div>
        </div>





      </div>
    
    
  );
}