import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './getallcustomer.css';

const GetAllPayment = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    fetchObjects();
  }, []);

  const fetchObjects = async () => {
    try {
      const response = await axios.get('http://localhost:9090/api/admin/getAllPayment'); // Replace with your API endpoint
      setObjects(response.data);
      
      
    } catch (error) {
      console.error('Error fetching objects:', error);
    }
  };
  return (
    <div className="container">
      <h2>All Payment</h2>
      <table className="object-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Bill ID</th>
            <th>Payment Date</th>
            <th>Amount</th>
            <th>Transaction ID</th>
            
          </tr>
        </thead>
        <tbody>
          {objects.map((object) => (
            <tr key={object.id}>
              
              <td>{object.bill_id}</td>
              <td>{object.payment_date}</td>
              <td>{object.amount}</td>
              <td>{object.transaction_id}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
  

export default GetAllPayment;
