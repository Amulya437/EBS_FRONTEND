import axios from "axios";

import { Component } from "react";

import './bill.css';

import { connect } from "react-redux";

export class AddBill extends Component {

    constructor(props) {

        super(props);

        this.state = {

            bill: {

                consumerNumber: "",

                consumedUnits: '',

                billMonth: '',

                billDate: '',

                amount: '',

                dueDate: '',

                customerId: '',

                meterId: '',




            },

            errors: {},

            msg: '',

            meter: [],

            customer: []





        };

    }

    componentDidMount() {




    }

    render() {

        return (




            <div>

                <div className="cardname">

                    <div className="card-body">

                        <h5 className="card-title">Enter Bill Info: </h5>

                        <p className="card-text">

                            <span>{this.state.msg}</span> <br />

                            <label >ConsumerNumber: </label>

                            <input type="text"

                                name="consumerNumber"




                                onChange={this.changeHandler} />

                            <span style={{ color: 'red' }}>{this.state.errors['consumerNumber']}</span>




                            <label>ConsumedUnits: </label>

                            <input type="text"

                                name="consumedUnits"




                                onChange={this.changeHandler} />

                            <span style={{ color: 'red' }}>{this.state.errors['consumedUnits']}</span>




                            <label>Bill Month: </label>

                            <input type="text"

                                name="billMonth"




                                onChange={this.changeHandler} />

                            <span style={{ color: 'red' }}>{this.state.errors['billMonth']}</span>

                            <br /><br />

                            <label>Bill Date: </label>

                            <input type="date"

                                name="billDate"




                                onChange={this.changeHandler} />

                            <span style={{ color: 'red' }}>{this.state.errors['billDate']}</span>

                            <br /><br />

                            <label>Due Date: </label>

                            <input type="date"

                                name="dueDate"




                                onChange={this.changeHandler} />

                            <span style={{ color: 'red' }}>{this.state.errors['dueDate']}</span>

                            <br /><br />

                            <label>Customer Id: </label>




                            <input type="text"

                                name="customerId"

                                value={this.state.bill.customerId}

                                onChange={this.changeHandler} />

                            <span style={{ color: 'red' }}>{this.state.errors['customerId']}</span>

                            <br /><br />

                            <label>Meter Id: </label>




                            <input type="text"




                                name="meterId"




                                value={this.state.bill.meterId}




                                onChange={this.changeHandler} />

                            <span style={{ color: 'red' }}>{this.state.errors['meterId']}</span>

                            <br /><br />




                            <button onClick={this.onAdd} className="btn btn-primary">Add Bill</button>

                        </p>

                    </div>

                </div>

            </div>

        );

    }

    changeHandler = (event) => {




        this.setState({

            bill: {




                ...this.state.bill,




                [event.target.name]: event.target.value




            }

        });




    }




    onAdd = () => {




        /* Validate User inputs */




        if (this.handleValidation()) {




            console.log(this.state.bill);




            /* Call the API */




            this.postBill(this.state.bill);




        }




        else {




            /* Display error messages */

            console.log('validation not passed..');




        }

    }




    handleValidation() {

        let customerId = this.state.bill.customerId;

        let meterId = this.state.bill.meterId;




        let tempErrors = {}







        let formValid = true;







        if (!customerId) { //If name is not given







            formValid = false;







            tempErrors['customerId'] = ' Customer Id cannot be empty';







        }







        if (!meterId) { //If name is not given

            formValid = false;

            tempErrors['meterId'] = 'Please enter your Meter Id';







        }




        this.setState({




            errors: tempErrors




        });




        return formValid;







    }




    async postBill(p) {

        let bill1 = {

          consumerNumber: p.consumerNumber,

          consumedUnits: p.consumedUnits,

          billMonth: p.billMonth,

          billDate: p.billDate,

          amount: 0, // Initialize amount to 0

          dueDate: p.dueDate

        };

   

        try {

          // Call the API to add the bill

          const response = await axios.post(

            `http://localhost:9090/api/bill/add/${p.customerId}/${p.meterId}`,

            bill1

          );

   

          const data = response.data;

          console.log('API success');

          console.log(data);

   

          // Calculate the amount based on the consumed units

          const calculatedAmount = this.calculateBill(p.consumedUnits);

   

          this.setState({

            msg: "Bill Added!!!",

          });

   

         

          this.props.AddBill({ ...data, amount: calculatedAmount });

        } catch (error) {

          console.log('Bill Generated!!!');

          this.setState({

         msg: 'Bill Generated!!!',

          });

        }

      }

   

      calculateBill(units) {

        const unitPrice = 2.5;

        return units * unitPrice;

      }

   

     

    }

   



