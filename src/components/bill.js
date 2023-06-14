import { Component } from "react";

import { AddBill } from "./bill-components/addBill";

import { BillDetailsById } from "./bill-components/billDetailsById";

import { BillList }  from "../components/bill-components/billList"

import { FilterBillsByCustomer } from "./bill-components/filterBillsByCustomerId";


export class Bill extends Component {

    constructor(props) {

        super(props);

        this.state = {

            componentNum: 0

        };

    }

    componentDidMount() {

    }

    render() {

        return (

            <div className="container-fliud">

                <div className="row">

                    <div className="col-sm-3">

                        <ul className="list-group">

                            <li className="list-group-item"> <button className=" list-group-item flyer-sidebar"

                                onClick={() => (this.setState({ componentNum: 1 }))}>

                                Add Bill</button></li>

                            <li className=" list-group-item"> <button className="list-group-item flyer-sidebar" onClick={() => {

                                this.setState({ componentNum: 2 })

                            }} > Show All Bills </button>

                            </li>

                            <li className="list-group-item">

                                <button className=" list-group-item flight-sidebar" onClick={() => (this.setState({ componentNum: 3 }))}>

                                    View Details of Bill</button></li>

                            <li className="list-group-item">

                                <button className=" list-group-item executive-sidebar" onClick={() => (this.setState({ componentNum: 4 }))}>

                                Filter Bills By CustomerId</button></li>

                        </ul>

                    </div>

                    <div className="col-lg-9">

                        {this.state.componentNum === 1 ?

                            <AddBill /> :this.state.componentNum === 2 ?

                            <BillList/> :this.state.componentNum === 3 ?

                              <BillDetailsById  /> :<FilterBillsByCustomer/>

                          }

                    </div>

                </div>

            </div>

        );

    }

}