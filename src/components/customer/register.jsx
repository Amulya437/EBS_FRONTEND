import React, { useState } from 'react';
import axios from 'axios';
import './register.css';


const Register = () => {
    const [formData, setFormData] = useState({
      name: '',
      contactNo: '',
      email: '',
      address: '',
      password: '',
    });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate the form
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      console.log(formData)
  
      // Make the Axios request to send the data
      try {
        const response = await axios.post('http://localhost:9090/api/customer/register', formData);
        console.log(response.data); // Handle the response as needed
        // Clear the form after successful submission
        setFormData({
          name: '',
          contactNo: '',
          email: '',
          address: '',
          password: '',
        });
        setErrors({});
        alert('Registered Successfully, now login')
        window.location.replace('/login')

      } catch (error) {
        console.error(error);
        // Handle error scenarios
      }
    };
  
    const validateForm = () => {
      const errors = {};
  
      // Validate name
      if (!formData.name) {
        errors.name = 'Name is required';
      }
  
      // Validate contact number
      if (!formData.contactNo) {
        errors.contactNo = 'Contact number is required';
      }
  
      // Validate email
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = 'Invalid email format';
      }
  
      // Validate address
      if (!formData.address) {
        errors.address = 'Address is required';
      }
  
      if (!formData.password) {
        errors.password = 'Password is required';
      } else if (
        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
          formData.password
        )
      ) {
        errors.password =
          'Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long';
      }
  
      return errors;
    };
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="contactNo">Contact Number:</label>
        <input
          type="text"
          id="contactNo"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
        />
        {errors.contactNo && <span>{errors.contactNo}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span>{errors.address}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
