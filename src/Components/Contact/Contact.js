import React, { useState } from 'react';
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would normally handle form submission (e.g., send it to a backend server)
    setSubmitted(true);
    console.log(formData); // Just for demonstration purposes
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Us</h1>
      <p className="lead text-center mb-4">
        We'd love to hear from you! Whether you have a question, feedback, or need assistance, 
        feel free to reach out using the form below or via the contact details provided.
      </p>
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input 
              type="text" 
              className="form-control" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input 
              type="email" 
              className="form-control" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group mb-3">
            <label>Message</label>
            <textarea 
              className="form-control" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows="5" 
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      ) : (
        <div className="alert alert-success mt-4" role="alert">
          Thank you for your message! We will get back to you shortly.
        </div>
      )}
      
    
    </div>
  );
};

export default Contact;
