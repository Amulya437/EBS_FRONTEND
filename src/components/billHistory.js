import { Component } from "react";

import { BillList } from "./bill-components/billList";

import FilterBillsByCustomer from "./bill-components/filterBillsByCustomerId";


export class BillHistory extends Component {

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

                               Get Bill By MyID</button></li>

                        </ul>

                    </div>

                    <div className="col-lg-9">

                            <FilterBillsByCustomer/>

                    </div>

                </div>

            </div>

        );

    }

}