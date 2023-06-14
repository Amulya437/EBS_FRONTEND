import { Component } from "react";
import { PaymentList } from "./payment-components/paymentList";
import { FilterPayment } from "./payment-components/filterPayment";

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentNum: 0
    };
  }

  renderComponent = () => {
    const { componentNum } = this.state;
    switch (componentNum) {
      case 1:
        return <PaymentList />;
      case 2:
        return <FilterPayment />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className="list-group-item">
                <button
                  className="list-group-item payment-sidebar"
                  onClick={() => this.setState({ componentNum: 1 })}
                >
                  Show all Payments
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
