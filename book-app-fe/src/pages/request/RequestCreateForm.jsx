import React , {useState} from 'react'


export default function RequestCreateForm(props) {
    const [formData, setFormData] = useState({
        book: '',
        user: '',
        description: '',
        approval: ''
      });

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here, such as sending data to a server
        console.log('Form submitted:', formData);
        // Reset the form after submission
        setFormData({
          book: '',
          user: '',
          description: '',
          approval: false,
        });
      };

      
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Book:</label>
              <input type="text" className="form-control" name="book" value={formData.book} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">User:</label>
              <input type="text" className="form-control" name="user" value={formData.user} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Description:</label>
              <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label className="form-label">Approval:</label>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="approval" value="accept" checked={formData.approval === 'accept'} onChange={handleChange} />
                <label className="form-check-label">Accept</label>
              </div>

              <div className="form-check">
                <input type="radio" className="form-check-input" name="approval" value="denied" checked={formData.approval === 'denied'} onChange={handleChange} />
                <label className="form-check-label">Denied</label>
              </div>
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}