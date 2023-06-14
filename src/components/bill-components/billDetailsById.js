import React, { Component } from "react";

import axios from "axios";




export class BillDetailsById extends Component {

  constructor(props) {

    super(props);

    this.state = {

      id: "",

      billList: [],

      errors: {},

      msg: ""

    };

  }




  componentDidMount() {

    this.getBill();

  }




  render() {

    return (

      <div>

        <h3>Get Bill Details by ID</h3>

        <form onSubmit={this.handleSubmit}>

          <div>

            <label>Bill ID:</label>

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

        {this.state.billList.length > 0 ? (

          <table className="table">

            <thead>

              <tr>

                <th scope="col">S.No</th>

                <th scope="col">Bill Id</th>

                <th scope="col">ConsumerNumber</th>

                <th scope="col">ConsumedUnits</th>

                <th scope="col">BillMonth</th>

                <th scope="col">BillDate</th>

                <th scope="col">Amount</th>

                <th scope="col">Due Date</th>

              </tr>

            </thead>

            <tbody>

              {this.state.billList.map((g, index) => (

                <tr key={g.id}>

                  <th scope="row">{index + 1}</th>

                  <td>{g.id}</td>

                  <td>{g.consumerNumber}</td>

                  <td>{g.consumedUnits}</td>

                  <td>{g.billMonth}</td>

                  <td>{g.billDate}</td>

                  <td>{g.amount}</td>

                  <td>{g.dueDate}</td>

                </tr>

              ))}

            </tbody>

          </table>

        ) : (

          <p>{this.state.msg}</p>

        )}

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

    this.getBill();

  };




  getBill = async () => {

    try {

      const id = this.state.id;

      const response = await axios.get(`http://localhost:9090/api/bill/${id}`);

      const data = response.data;

      if (data) {

        this.setState({

          billList: [data],

          msg: ""

        });

      } else {

        this.setState({

          billList: [],

          msg: "No bill found for the given ID."

        });

      }

    } catch (error) {

      console.error(error);

      this.setState({

        billList: [],

        msg: "No bill found for the given ID."

      });

    }

  };

}