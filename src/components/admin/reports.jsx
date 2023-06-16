import React from 'react';
import './adminDashboard.css';
import { Link } from 'react-router-dom';

const Reports = () => {
    return (
        <div className="container">
            <h2>Admin Dashboard</h2>
        <div className="admin-dashboard">
            <div>
                <Link to="/getallcustomer" className='link'>
                    <div className="card" id="manage-customer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwiiybAUynWxRI6GsVte8jpriZfwPqMdGY8j0H3sdAfQ&usqp=CAU&ec=48600113" alt="Manage Customer" />
                        <h3>All Customers</h3>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/getallbill" className='link'>
                    <div className="card" id="manage-payment">
                        <img src="https://static.vecteezy.com/system/resources/previews/007/126/445/original/payment-bill-icon-vector.jpg" alt="Manage Payment" />
                        <h3>All Bills</h3>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/getallpayment" className='link'>
                    <div className="card" id="manage-bills">
                        <img src="data:image/png;base64,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" alt="Manage Bills" />
                        <h3>All Payments</h3>
                    </div>
                </Link>
            </div >
            

            
        </div >
        </div>
    );
};

export default Reports;
{/* <div className="admin-dashboard">
<div className="card" id="manage-customer">
  <img src="https://img.freepik.com/premium-vector/3d-isometric-online-customer-support_7209-366.jpg" alt="Manage Customer" />
  <h3>Manage Customer</h3>
</div>
<div className="card" id="manage-payment">
  <img src="https://img.freepik.com/free-vector/pay-balance-owed-abstract-concept-vector-illustration-making-credit-payment-pay-owed-money-bank-irs-balance-due-debt-consolidation-management-taxpayer-bill-abstract-metaphor_335657-4342.jpg?w=2000" alt="Manage Payment" />
  <h3>Manage Payment</h3>
</div>
<div className="card" id="manage-bills">
  <img src="https://img.freepik.com/free-vector/payment-receipt-flat-style_23-2147918882.jpg" alt="Manage Bills" />
  <h3>Manage Bills</h3>
</div>
<div className="card" id="reports">
  <img src="https://static.vecteezy.com/system/resources/thumbnails/004/579/241/small/compile-data-reports-with-smartphone-applications-free-vector.jpg" alt="Reports" />
  <h3>Reports</h3>
</div>
</div> */}