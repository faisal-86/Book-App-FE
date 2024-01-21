import React , {useState} from 'react'

export default function CategoryCreateForm(props) {
    const [formData, setFormData] = useState({
        name: '',
        book: '',
        image: null
      });
    
      // Handle form field changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      // Handle image upload
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
          ...formData,
          image: file
        });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform additional actions here, such as sending the form data to a server
        console.log('Form submitted:', formData);
      };


return (
    <form onSubmit={handleSubmit}>
      <label> Name: <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Book:
        <input type="text" name="book" value={formData.book} onChange={handleInputChange}/> </label>

      <br />

      <label>
        Image:
        <input type="file" name='image'  onChange={handleImageChange} placeholder='Add Image' />
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};