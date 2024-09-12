import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = ({ onItemSaved }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [fee_amount, setFee_amount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      email,
      phone_number,
      qualifications,
      fee_amount,
      description,
    };

    axios.post('http://localhost:8000/items/', newItem)
      .then(response => {
        onItemSaved(response.data);
        setSubmitted(true);
        navigate('/Success'); 
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="container mt-4">
      {submitted ? (
        <div className="alert alert-success" role="alert">
          Item added successfully!
        </div>
      ) : (
        
        <form onSubmit={handleSubmit}>
          <h1 className='text-center'>Create New</h1>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number:</label>
            <input
              type="text"
              className="form-control"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Qualifications:</label>
            <input
              type="text"
              className="form-control"
              value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Fee Amount:</label>
            <input
              type="text"
              className="form-control"
              value={fee_amount}
              onChange={(e) => setFee_amount(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </form>
      )}
    </div>
  );
};

export default Create;
