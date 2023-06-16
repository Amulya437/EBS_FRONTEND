import React from 'react';
import './adminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="container">
            <h2>Admin Dashboard</h2>
        <div className="admin-dashboard">
            <div>
                <Link to="/managecustomer" className='link'>
                    <div className="card" id="manage-customer">
                        <img src="https://img.freepik.com/premium-vector/3d-isometric-online-customer-support_7209-366.jpg" alt="Manage Customer" />
                        <h3>Manage Customer</h3>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/managepayment" className='link'>
                    <div className="card" id="manage-payment">
                        <img src="https://img.freepik.com/free-vector/pay-balance-owed-abstract-concept-vector-illustration-making-credit-payment-pay-owed-money-bank-irs-balance-due-debt-consolidation-management-taxpayer-bill-abstract-metaphor_335657-4342.jpg?w=2000" alt="Manage Payment" />
                        <h3>manage payment</h3>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/managebills" className='link'>
                    <div className="card" id="manage-bills">
                        <img src="https://img.freepik.com/free-vector/payment-receipt-flat-style_23-2147918882.jpg" alt="Manage Bills" />
                        <h3>Manage Bills</h3>
                    </div>
                </Link>
            </div >
            <div>
                <Link to="/reports" className='link'>
                    <div className="card" id="reports">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/579/241/small/compile-data-reports-with-smartphone-applications-free-vector.jpg" alt="Reports" />
                        <h3>Reports</h3>
                    </div>
                </Link>
            </div >
        </div >
        </div>
        
    );
};

export default AdminDashboard;
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