import React from 'react';
import './navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="src\components\assests\images\logo.png" alt="" />
          <span className="app-name">Electricity Billing System</span>
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li className="nav-item">Dashboard</li>
            <li className="nav-item">Manage</li>
            {/* <li className="nav-item" aria-current="page" to="/login"><button>Login</button></li> */}
            {/* <NavLink to="/login" className="login-button">Login/SignUp</NavLink> */}

            <li className="nav-item">
              <Link className="nav-item" aria-current="page" to="/aboutus" >
                About Us
              </Link></li>
            <li className="nav-item">
              <Link className="nav-item" aria-current="page" to="/contactus" >
                Contact Us
              </Link></li>
            <li className="nav-item">
              <Link className="nav-item" aria-current="page" to="/login" >
                <button type="button" className="btn btn-primary">Login</button>
              </Link></li>
            <li className="nav-item">
              <Link className="nav-item" aria-current="page" to="/register" >
                <button type="button" className="btn btn-primary">Register</button>
              </Link></li>
              <li className="nav-item">
              {<Link to="/">
              <button className="btn btn-outline-danger">
                Logout </button>  </Link>
            }

              </li>
          </ul>
         


        </div>
      </nav>
    </header>

  );
};

export default Navbar;

