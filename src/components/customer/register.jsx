 import React, { useState } from 'react';
// import axios from 'axios';
import './register.css'; // Import the CSS file for styling

// const Register = () => {
//   const [formData, setFormData] = useState({
//     accountType: '',
//     name: '',
//     address: '',
//     email: '',
//     contact: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Make Axios post request here
//       axios
//         .post('/api/register', formData)
//         .then((response) => {
//           console.log(response.data); // Handle success response
//         })
//         .catch((error) => {
//           console.error(error); // Handle error response
//         });
//     }
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     // Perform validations for each field
//     if (formData.accountType === '') {
//       newErrors.accountType = 'Please select an account type';
//       isValid = false;
//     }
//     if (formData.name.trim() === '') {
//       newErrors.name = 'Please enter your name';
//       isValid = false;
//     }
//     // Add more validations for other fields

//     setErrors(newErrors);
//     return isValid;
//   };

//   return (
//     <div className="registration-page">
//       <h1>Registration Page</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Account Type:</label>
//           <select
//             name="accountType"
//             value={formData.accountType}
//             onChange={handleChange}
//             className="form-control"
//           >
//             <option value="">Select an option</option>
//             <option value="admin">Admin</option>
//             <option value="customer">Customer</option>
//           </select>
//           {errors.accountType && <span className="error">{errors.accountType}</span>}
//         </div>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="form-control"
//           />
//           {errors.name && <span className="error">{errors.name}</span>}
//         </div>
//         <div className="form-group">
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="form-control"
//           />
//           {/* Add error handling for address field */}
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="form-control"
//           />
         
//         </div>
//         <div className="form-group">
//           <label>Contact:</label>
//           <input
//             type="text"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             className="form-control"
//           />
//           {/* Add error handling for contact field */}
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="form-control"
//           />
//           {/* Add error handling for password field */}
//         </div>
//         <div className="button-group">
//           <button type="submit" className="btn-primary">Create</button>
//           <button type="button" className="btn-secondary">Back</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;

import { Component } from "react";


export default class SignUp extends Component{

  render(){

      return (

          <div id="signup">

              <h3 className="text-center text-white pt-5">Sign Up Form</h3>

              <div className="container">

                  <div id="signup-row" className="row justify-content-center align-items-center">

                      <div id="signup-column" className="col-md-6">

                          <div id="signup-box" className="col-md-12">

                              <form id="signup-form" className="form" action="" method="post">

                                  <h3 className="text-center text-info">Sign Up</h3>

                                  <div className="form-group">

                                      <label htmlFor="name" className="text-info">Name:</label><br />

                                      <input type="text" name="name" id="name" className="form-control" />

                                  </div>

                                  <div className="form-group">

                                      <label htmlFor="username" className="text-info">Email:</label><br />

                                      <input type="text" name="username" id="username" className="form-control" />

                                  </div>

                                  

                                  <div className="form-group">

                                      <label htmlFor="password" className="text-info">Password:</label><br />

                                      <input type="text" name="password" id="password" className="form-control" />

                                  </div>
                                  <div className="form-group">

                                      <label htmlFor="role" className="text-info">Role:</label><br />

                                      
                                      <select
          
                               // value={formData.accountType}
                                 // onChange={handleInputChange}
                                  className="form-control"
                                  >
                          <option value="">Select an option</option>
                          <option value="admin">Admin</option>
                          <option value="customer">Customer</option>
                          </select>


                                  </div>

                                  <div className="form-group">

                                      <br/>

                                      <input type="submit" name="submit" className="btn btn-info btn-md" value="Sign Up" />

                                  </div>

                              </form>

                          </div>

                      </div>

                  </div>

              </div>

          </div>

      )

  }

}