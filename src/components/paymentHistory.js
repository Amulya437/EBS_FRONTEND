import React, { Component } from "react";
import { FilterPayment } from "./payment-components/filterPayment";
import { AddPayment } from "./payment-components/addPayment";

export class PaymentHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentNum: 0,
    };
  }

  renderComponent() {
    const { componentNum } = this.state;
    switch (componentNum) {
      case 1:
        return <AddPayment />;
      case 2:
        return <FilterPayment />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className="list-group-item">
                <button
                  className="list-group-item payment-sidebar"
                  onClick={() => this.setState({ componentNum: 1 })}
                >
                  Do Payment
                </button>
              </li>
              <li className="list-group-item">
                <button
                  className="list-group-item payment-sidebar"
                  onClick={() => this.setState({ componentNum: 2 })}
                >
                  Filter Payment By Customer Id
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">{this.renderComponent()}</div>
        </div>
      </div>
    );
  }
}
