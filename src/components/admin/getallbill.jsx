import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './getallbill.css'; // Import the CSS file

const GetAllBill = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:9090/api/admin/getAllBill'); // Replace with your API endpoint
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const openModal = (customer) => {
    // Implement your modal logic here
    console.log('Opening modal for customer:', customer);
    // You can use a state variable to control the visibility of the modal
  };

  return (
    <div className="container">
      <h2>Customer Bill List</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Consumer Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact No</th>
              <th>Bill Month</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.consumerNumber}</td>
                <td>{customer.customer.name}</td>
                <td>{customer.customer.email}</td>
                <td>{customer.customer.address}</td>
                <td>{customer.customer.contactNo}</td>
                <td>{customer.billMonth}</td>
                <td>{customer.amount}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-view-bill"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => openModal(customer)}
                  >
                    View Bill
                  </button>
                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Bill for Customer: {customer.customer.name}
                          </h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <div>
                            <label className="fw-bold">Name:</label> {customer.customer.name}
                          </div>
                          <div>
                            <label className="fw-bold">Customer No:</label> {customer.consumerNumber}
                          </div>
                          <div>
                            <label className="fw-bold">Contact No:</label> {customer.customer.contactNo}
                          </div>
                          <div>
                            <label className="fw-bold">Email:</label> {customer.customer.email}
                          </div>
                          <div>
                            <label className="fw-bold">Address:</label> {customer.customer.address}
                          </div>
                          <div>
                            <label className="fw-bold">Meter No:</label> {customer.meter.meterNo}
                          </div>
                          <div>
                            <label className="fw-bold">Consumed Units:</label> {customer.consumedUnits}
                          </div>
                          <div>
                            <label className="fw-bold">Bill Month:</label> {customer.billMonth}
                          </div>
                          <div>
                            <label className="fw-bold">Bill Date:</label> {customer.billDate}
                          </div>
                          <div>
                            <label className="fw-bold">Amount:</label> {customer.amount}
                          </div>
                          <div>
                            <label className="fw-bold">Due Date:</label> {customer.dueDate}
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllBill;
