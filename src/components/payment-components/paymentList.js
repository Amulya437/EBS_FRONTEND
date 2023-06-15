import { Component } from "react";

import axios from "axios";




export class PaymentList extends Component{

    constructor(props) {

        super(props);



        this.state = {

           paymentList:[],

        };

      }



      componentDidMount() {

             this.getpayment();

      }

      render(){

        return(

            <table className="table">

            <thead>

              <tr>

                <th scope="col">S.No</th>

                <th scope="col">Id</th>

                <th scope="col">Customer Id</th>

                <th scope="col">Bill Id</th>

                <th scope="col">Payment Date</th>

                <th scope="col">Total Amount</th>

                <th scope="col">Transaction Id</th>



              </tr>

            </thead>

            <tbody>

              {

                this.state.paymentList.map((p, index)=>(

                  <tr key={p.id}>

                    <th scope="row" key={p.id}>{index + 1}</th>

                    <td>{p.id}</td>

                    <td>{p.customer.id}</td>

                    <td>{p.bill.id}</td>

                    <td>{p.paymentDate}</td>

                    <td>{p.totalAmount}</td>

                    <td>{p.transactionId}</td>

                  </tr>

                ))

              }

            </tbody>

          </table>

          )

      }

      async getpayment(){

        try{

            const response = axios.get("http://localhost:9090/api/payment/getall");

            const data= (await response).data;

            this.setState({

                paymentList:data,

            })

        }

        catch(error){

            console.error(error);

        }

    }

}