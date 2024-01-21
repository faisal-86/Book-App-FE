import React ,{useState} from 'react'

export default function BookEditForm(props) {
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
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions with the form data here, such as sending it to an API
        console.log('Form data submitted:', formData);
      };

      
      return (
        <div className="container mt-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="isbn" className="form-label">
                ISBN
              </label>
              <input
                type="text"
                className="form-control"
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="publish_date" className="form-label"> Publish Date</label>
              <input type="date" className="form-control" id="publish_date" name="publish_date" value={formData.publish_date} onChange={handleChange}/>
            </div>
    
            <div className="mb-3">
             <label htmlFor="category" className="form-label"> Category </label>
              <input type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleChange}/>
            </div>
    
            <div className="mb-3">
              <label htmlFor="library" className="form-label">  Library </label>
              <input type="text" className="form-control" id="library" name="library" value={formData.library} onChange={handleChange} />
            </div>
    
            <div className="mb-3">
              <label htmlFor="review" className="form-label"> Review </label>
              <textarea className="form-control" id="review" name="review" value={formData.review} onChange={handleChange}/>
            </div>
    
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      );
    };
    
  