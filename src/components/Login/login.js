


import React, { Component } from 'react';
import axios from 'axios'

import '../Login/login.css';
class Login extends Component {

  constructor(props) {

    super(props);

    this.state = {

      username: '',

      password: '',

      role: ''

    };

  }




  handleInputChange = event => {

    const { name, value } = event.target;

    this.setState({ [name]: value });

  }




 
  
  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { username, password, role } = this.state;
    console.log(role)
    if(role == 'customer'){
    try {
     console.log(password);
        const res = await axios.post("http://localhost:9090/api/customer/login", {
          
            email: username,
            password: password
        })
        
        console.log(res.data)
        window.location.replace('/customerdashboard')
    } catch (err) {
        alert('Invalid Credentials !')
    }
  }
    else if(role == 'admin'){
      console.log('in admin')
        try {
         console.log(password);
            const res = await axios.post("http://localhost:9090/api/admin/login", {
              
                email: username,
                password: password
            })
            
            console.log(res.data)
            window.location.replace('/admindashboard')
        } catch (err) {
            alert('Invalid Credentials !')
  
      }
    }
    else(
      alert('Select role')
    )
}




  render() {

    const { username, password, role } = this.state;




    return (

      <div className="login-container">

        <h2>Login</h2>

        <form onSubmit={this.handleFormSubmit}>

          <div className="input-group">

            <label htmlFor="username">Username</label>

            <input

              type="text"

              id="username"

              name="username"

              value={username}

              onChange={this.handleInputChange}

              required

            />

          </div>

          <div className="input-group">

            <label htmlFor="password">Password</label>

            <input

              type="password"

              id="password"

              name="password"

              value={password}

              onChange={this.handleInputChange}

              required

            />

          </div>
          <div className="input-group">
          <label>Role</label>
          <select
            name="role"
            value={role}
            onChange={this.handleInputChange}
            className="form-control"
          >
            <option value="">Select an option</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>


          </div>
          <button type="submit" onClick={this.login}>Login</button>

        </form>

        <div className="register-link">

          Don't have an account? <a href="/register">Register</a>

        </div>

      </div>


    );

  }

}




export default Login;

// import React, { useRef, useState } from 'react'

// import './login.css'

// import { Link } from 'react-router-dom'



// import axios from 'axios'





// function Login() {




//     const email = useRef();

//     const password = useRef();

//     const [passwordCheck, setPasswordCheck] = useState('');

//     const [emailCheck, setEmailCheck] = useState('');

//     const [userCheck, setUserCheck] = useState('');


//     const isPasswordValid = (password) => {

//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//         return passwordRegex.test(password);

//     };





//     const isEmailValid = (email) => {

//         const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//         return emailRegex.test(email);

//     };

   




//     const handlePasswordChange = (event) => {

//         setPasswordCheck(event.target.value);

//     };

//     const handleEmailChange = (event) => {

//         setEmailCheck(event.target.value);

//     };

//     const handleUserChange = (event) => {

//         setUserCheck(event.target.value);

//     };




//     const handleSubmit = async (e) => {

//         e.preventDefault();

       

//         console.log("Hello")

//         try {

//             console.log("Hii")

//             const res = await axios.post("http://localhost:2024/admin/login", {

//                 email: email.current.value,

//                 password: password.current.value

//             })

           

//             console.log(res.data)

//             window.location.replace('/adminDash')

//         } catch (err) {

//             alert('Invalid Credentials !')

//         }

//     }

//     return (
//        <>


//             <div className="container">

//             <div className='section log' id="add-form-section">
//                 <div className='logImg add-box-image' id="logoImg">
//                     <h3 >Login</h3>
//                     {/* <img src="https://i.pinimg.com/originals/ff/da/81/ffda81a5c2d5ff9ec4ff367e19b4dcff.png" alt="" /> */}
//                 </div>

//                 <form action="" className='form-control' onSubmit={handleSubmit}>

//                     <div className=' add-bx inputFields '>
//                         <label htmlFor="email">Email</label>

//                         <input type="email" id="email" name="email" value={emailCheck} onChange={handleEmailChange} required className='text-field' ref={email} />

//                         {!isEmailValid(emailCheck) && (

//                             <><span class="badge rounded-pill text-bg-info">Email not valid</span></>

//                         )}

//                         <label htmlFor="password">Password</label>

//                         <input type="password" id="password" name="password" value={passwordCheck} onChange={handlePasswordChange} required className='password-field' ref={password} />

//                         {!isPasswordValid(passwordCheck) && (

//                             <><span class="badge rounded-pill text-bg-info">Password not valid</span></>

//                         )}

//                         <br></br>

//                         <label htmlFor="user">Select Role</label>

//                         <select name="type" onChange={handleUserChange}>

//                             <option value="">Admin</option>
//                             <option value="luggage">Customer</option>

//                         </select>

//                     </div>

//                             <div id="btnGroup" >

//                     <button className='btn btn-primary' type="submit">Login</button>

//                     <button className='btn btn-danger'>Forgot Password</button>

//                     <button className='btn btn-warning'>Back</button>

//                     </div>

//                 </form>

//             </div>

//             </div>


//         </>


//     );




// };




// export default Login;
 // handleFormSubmit = event => {

  //   event.preventDefault();

  //   // Add your login logic here

  //   const { username, password, role } = this.state;

  //   // Process the form data

  //   console.log('Username:', username);

  //   console.log('Password:', password);

  //   console.log('Role:', role);

  // }