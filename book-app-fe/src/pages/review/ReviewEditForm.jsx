import React, { useState } from 'react';

export default function ReviewEditForm(props) {
    const [formData, setFormData] = useState({
        book: '',
        user: '',
        comment: '',
        rating: 0,
      });


      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleRatingChange = (newRating) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          rating: newRating,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to handle the form submission, e.g., send the data to a parent component
        console.log('Form submitted with data:', formData);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label> Book: <input type="text" name="book" value={formData.book} onChange={handleInputChange} /> </label>

          <br />
          
          <label> User: <input type="text" name="user" value={formData.user} onChange={handleInputChange} /> </label>
          
          <br />

          <label> Comment: <textarea name="comment" value={formData.comment} onChange={handleInputChange}></textarea> </label>
          
          <br />

         <label> Rating: <input type="number" name="rating" value={formData.rating} onChange={(e) =>
            
         handleRatingChange(parseInt(e.target.value, 10))} max="5" /> </label>
          
          <br />

          <button type="submit">Submit</button>
        </form>
      );
    };
    

