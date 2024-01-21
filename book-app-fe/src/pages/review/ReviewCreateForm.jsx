import React , {useState} from 'react'

export default function ReviewCreateForm(props) {
    const [formData, setFormData] = useState({
        book: '',
        user: '',
        comment: '',
        rating: '',
      });
     
  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here (e.g., send it to a server)
    console.log('Form submitted:', formData);
    // Reset the form after submission 
    setFormData({
      book: '',
      user: '',
      comment: '',
      rating: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label> Book: <input type="text" name="book" value={formData.book} onChange={handleInputChange} /></label>

      <label> User: <input type="text" name="user" value={formData.user} onChange={handleInputChange} /> </label>

      <label> Comment: <textarea name="comment" value={formData.comment} onChange={handleInputChange} /> </label>
        
      <label> Rating: <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} max="5"/> </label>

      <button type="submit">Submit</button>
    </form>
  );
};

