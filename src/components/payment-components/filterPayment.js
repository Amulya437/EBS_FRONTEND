import React, { Component } from "react";
import axios from "axios";

export class FilterPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      paymentList: [],
      errors: {},
      msg: ""
    };
  }

  render() {
    return (
      <div>
        <h3>Get Payment Details by Customer ID</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Customer ID:</label>
            <input
              type="text"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type="submit">Get Details</button>
        </form>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Payment ID</th>
              <th scope="col">Customer ID</th>
              <th scope="col">Bill ID</th>
              <th scope="col">Payment Date</th>
              <th scope="col">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.paymentList.map((payment, index) => (
              <tr key={payment.id}>
                <th scope="row">{index + 1}</th>
                <td>{payment.id}</td>
                <td>{payment.customer.id}</td>
                <td>{payment.bill.id}</td>
                <td>{payment.paymentDate}</td>
                <td>{payment.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getPayment();
  };

  getPayment = async () => {
    try {
      const id = this.state.id;
      const response = await axios.get(`http://localhost:9090/api/payment/${id}`);
      const data = response.data;
      this.setState({
        paymentList: [data]
      });
    } catch (error) {
      console.error(error);
    }
  };
}