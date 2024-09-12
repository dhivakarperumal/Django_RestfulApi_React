import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ItemForm = () => {
  const { id } = useParams(); // Get item ID from URL parameters
  const navigate = useNavigate();
  const [item, setItem] = useState({
    name: '',
    email: '',
    phone_number: '',
    fee_amount: '',
    qualifications: '',
    description: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/items/${id}/`)
        .then(response => {
          setItem(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the item!', error);
        });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      axios.put(`http://localhost:8000/items/${id}/`, item)
        .then(() => {
          navigate('/'); // Navigate back to the item list after update
        })
        .catch(error => {
          console.error('There was an error updating the item!', error);
        });
    } else {
      axios.post('http://localhost:8000/items/', item)
        .then(() => {
          navigate('/'); // Navigate back to the item list after creation
        })
        .catch(error => {
          console.error('There was an error creating the item!', error);
        });
    }
  };

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  return (
    <div className="container mt-4">
      <h1>{id ? 'Edit Item' : 'Create Item'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={item.name} 
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
            value={item.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label>Mobile No</label>
          <input 
            type="text" 
            className="form-control" 
            name="phone_number" 
            value={item.phone_number} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label>Fee Amount</label>
          <input 
            type="number" 
            className="form-control" 
            name="fee_amount" 
            value={item.fee_amount} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label>Qualifications</label>
          <input 
            type="text" 
            className="form-control" 
            name="qualifications" 
            value={item.qualifications} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label>Description</label>
          <textarea 
            className="form-control" 
            name="description" 
            value={item.description} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-success">
          {id ? 'Update Item' : 'Create Item'}
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
