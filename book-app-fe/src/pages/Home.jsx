import React from 'react';
import Category from './category/Category';
import BookCard from './book/Book';
export default function Home() {
  return (
      <>
      {/* Welcome Section */}
      <div className="text-center mb-5">
        <h1 className="display-4">Welcome to NovaGram</h1>
        <p className="lead">Explore our categories and discover new books!</p>
      </div>
      {/* Category Section */}
        <h2 className="text-center mb-4">Categories</h2>
        <div className="justify-content-center">
          <Category />
        </div>
      {/* New Book Section */}
        <h2 className="text-center mb-4">New Books</h2>
        <div className="justify-content-center">
          <BookCard />
        </div>
        </>
  );
}