import React from 'react';
import './customerDashboard.css';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
    return (
        <div className="container">
            <h2>Customer Dashboard</h2>
        <div className="admin-dashboard">
            
            <div>
                <Link to="/editprofile" className='link'>
                    <div className="card" id="manage-customer">
                        <img src="https://media.istockphoto.com/id/1300004790/vector/male-and-female-characters-are-editing-profile-online.jpg?s=612x612&w=0&k=20&c=hb5bU75SfhBPcHjnAlJZ1FBBiJ2YpMoGth9-v11Go40=" alt="Manage Customer" />
                        <h3>Edit Profile</h3>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/paymentHistory" className='link'>
                    <div className="card" id="manage-payment">
                        <img src="https://img.freepik.com/premium-vector/tiny-characters-huge-transaction-history-payment-recipe-man-buyer-holding-credit-card-online-payment-woman-with-glass-cashless-paying-shopping-store-cartoon-people-vector-illustration_87771-11353.jpg?w=2000" alt="Manage Payment" />
                        <h3>Payment History</h3>
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/billhistory" className='link'>
                    <div className="card" id="manage-bills">
                        <img src="https://static.vecteezy.com/system/resources/previews/001/870/659/original/medical-history-calculator-and-bills-design-free-vector.jpg" alt="Manage Bills" />
                        <h3>Bill History</h3>
                    </div>
                </Link>
            </div >
            {/* <div>
                <Link to="/meter" className='link'>
                    <div className="card" id="manage-meter">
                        <img src="https://media.istockphoto.com/id/1311503439/vector/male-and-female-characters-are-paying-utilities-together.jpg?s=1024x1024&w=is&k=20&c=8DbqZWGjX5C6AFI_LRsz6FTtkJWE9rKZ7psKkBnAC5E=" alt="Meter" />
                        <h3>Meter</h3>
                    </div>
                </Link>
            </div > */}
            <div>
            <Link to="/changepassword" className='link'>
                <div className="card" id="reports">
                    <img src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg?w=2000" alt="Reports" />
                    <h3>Change Password</h3>
                </div>
            </Link>
        </div >
        </div >
        </div>
    );
};

export default CustomerDashboard;
