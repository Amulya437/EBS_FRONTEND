import axios from "axios";

import { Component } from "react";

export class BillList extends Component {

    constructor(props) {

        super(props);

        this.state = {

            billList:[],

        }

        };

   

    componentDidMount() {

        this.getbill();

    }

    render() {

        return (

            <table className="table">

                <thead>

                    <tr>

                        <th scope="col">S.No</th>

                        <th scope="col">Bill Id</th>

                        <th scope="col">CustId</th>

                        <th scope="col">CustName</th>

                        <th scope="col">ConsumerNo</th>

                        <th scope="col">Cons.Units</th>

                        <th scope="col">BillMonth</th>

                        <th scope="col">BillDate</th>

                        <th scope="col">Amount</th>

                        <th scope="col">DueDate</th>

                        <th scope="col">MeterId</th>

                       

                    </tr>

                </thead>

                <tbody>




              {




                this.state.billList.map((b, index)=>(




                  <tr key={b.id}>




                    <th scope="row" key={b.id}>{index + 1}</th>




                    <td>{b.id}</td>

                    <td>{b.customer.id}</td>

                    <td>{b.customer.name}</td>

                    <td>{b.consumerNumber}</td>




                    <td>{b.consumedUnits}</td>




                    <td>{b.billMonth}</td>

                    <td>{b.billDate}</td>

                    <td>{b.amount}</td>

                    <td>{b.dueDate}</td>

                    <td>{b.meter.id}</td>

                   

                  </tr>




                ))




              }




            </tbody>

            </table>)

    }




   async getbill(){

    try{




        const response = axios.get("http://localhost:9090/api/bill/getall");




        const data= (await response).data;




        this.setState({




            billList:data,




        })




    }




    catch(error){




        console.error(error);




    }

}

}