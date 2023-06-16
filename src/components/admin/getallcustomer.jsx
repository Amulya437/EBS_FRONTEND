import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './getallcustomer.css';

const GetAllCustomer = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetchObjects();
  }, []);

  const fetchObjects = async () => {
    try {
      const response = await axios.get('http://localhost:9090/api/admin/getAllCustomer'); // Replace with your API endpoint
      setObjects(response.data);
    } catch (error) {
      console.error('Error fetching objects:', error);
    }
  };
  return (
    <div className="container">
      <h2>All Customers</h2>
      <table className="object-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact No</th>
            <th>Email</th>
            <th>Address</th>
            <th>Meter No</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {objects.map((object) => (
            <tr key={object.id}>
              <td>{object.name}</td>
              <td>{object.contactNo}</td>
              <td>{object.email}</td>
              <td>{object.address}</td>
              <td>{object.meter.meterNo}</td>
              <td>{object.user.username}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};
  

export default GetAllCustomer;
