import { Component } from "react";
import axios from "axios"
import "./payment.css"

export class AddPayment extends Component{

    constructor(props) {

        super(props);

   

        this.state = {

            payment:{
                paymentDate : "",
                customerId : "",
                billId : ""
                
            },

            errors: {},
            msg: '',
            bill : [],
            customer:[]

        };

      }




    componentDidMount(){

    }  

    render(){

        return(

            <div>

            <div className="card">

              <h5 className="card-header">Make Payment</h5>

              <div className="card-body">
                <p className="card-text">
                  <span>{this.state.msg}</span> <br />
                    <label>Customer Id: </label>

                   <input type="text"

                            name="customerId"

                            value={this.state.payment.customerId}

                            onChange={this.changeHandler} />

                            <span style={{ color : 'red'}}>{this.state.errors['customerId']}</span>

                    <br /><br />

                    <label>Bill Id: </label>

                   <input type="text"

                            name="billId"

                            value={this.state.payment.billId}

                            onChange={this.changeHandler} />

                            <span style={{ color : 'red'}}>{this.state.errors['billId']}</span>

                    <br /><br />

                    <label>Payment Date: </label>

                   <input type="date"

                            name="paymentDate"

                            value={this.state.payment.paymentDate}

                            onChange={this.changeHandler} />

                            <span style={{ color : 'red'}}>{this.state.errors['paymentDate']}</span>

                    <br /><br />

                    

                    <button onClick={this.onAdd} className="btn btn-primary">Complete Payment</button>

                </p>

                 

              </div>

            </div>

          </div>

        );

    }

    changeHandler= (event) =>{

        this.setState({

            payment: {

                ...this.state.payment,

                [event.target.name] : event.target.value

            }

        });

}

onAdd = ()=>{

    /* Validate User inputs */

    if(this.handleValidation()){

        console.log(this.state.payment);

        /* Call the API */

       this.postPayment(this.state.payment);

    }

    else{

        /* Display error messages */

        console.log('validation not passed..');    

    }

}

handleValidation(){

    let customerId = this.state.payment.customerId;

    let billId = this.state.payment.billId;

    let paymentDate = this.state.payment.paymentDate;

    let tempErrors={}

    let formValid = true;

    if(!customerId){ //If name is not given

        formValid = false;

        tempErrors['customerId']=' Customer Id cannot be empty';

    }

    if(!billId){ //If name is not given

        formValid = false;

        tempErrors['billId']='Please enter your Bill Id';

    }

    if(!paymentDate){ //If name is not given

        formValid = false;

        tempErrors['paymentDate']='Please enter Payment Date';

    }

    this.setState({

        errors: tempErrors

    });

    return formValid;

}

async postPayment(p){

    let payment1= {

        customerId : p.customerId,

        billId :p.billId,
        
        paymentDate : p.paymentDate,

    }

    try {

        const response = axios.post("/add/" + p.billId + "/" + p.customerId, payment1);

        const data = (await response).data;

        console.log('API success');

        console.log(data);

        this.setState({

            msg: "Payment Added"

        })

        this.props.AddPayment(data);

      } catch (error) {

        

        this.setState({

            msg: 'Invalid Credentials'

        })

      }

}

}