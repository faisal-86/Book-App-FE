import React, { useState } from 'react';

export default function BookCreateForm(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    isbn: '',
    publish_date: '',
    category: '',
    library: '',
    review: '',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const handleUploadClick = () => {
    if (!selectedFile) {
      return;
    }
}

//   const handleUpload = () => {
//     // Perform any necessary validation
//     if (selectedFile) {
//       // Pass the selected file to the parent component
//       //   onUpload(selectedFile);
//     }
//   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any further actions with the form data here, like sending it to an API.
    
    console.log('Form Data:', formData);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Author:</label>
          <input type="text" className="form-control" name="author" value={formData.author} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">ISBN:</label>
          <input type="text" className="form-control" name="isbn" value={formData.isbn} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Publish Date:</label>
          <input type="date" className="form-control" name="publish_date" value={formData.publish_date} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Category:</label>
          <input type="text" className="form-control" name="category" value={formData.category} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Library:</label>
          <input type="text" className="form-control" name="library" value={formData.library} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Review:</label>
          <textarea className="form-control" name="review" value={formData.review} onChange={handleChange} />
        </div>

        {/* <div className="mb-3">
          <input className="form-control" type="file" onChange={handleFileChange} />
        </div> */}

        <div>
      <input className="form-control" type="file" onChange={handleFileChange} />

      <div>{selectedFile && `${selectedFile.name} - ${selectedFile.type}`}</div>

      <button className="btn btn-success" style={{margin: 20}} onClick={handleUploadClick}>Upload</button>
    </div>


      </form>
    </div>
  );
}
