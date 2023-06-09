import React, { useRef, useState } from 'react'
import './login.css'

import { Link } from 'react-router-dom'

import axios from 'axios'


function Login() {

    const email = useRef();
    const password = useRef();
    const [passwordCheck, setPasswordCheck] = useState('');
    const [emailCheck, setEmailCheck] = useState('');
    const [userCheck, setUserCheck] = useState('');

    
   

    const isPasswordValid = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const isEmailValid = (email) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };
    

    const handlePasswordChange = (event) => {
        setPasswordCheck(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmailCheck(event.target.value);
    };
    const handleUserChange = (event) => {
        setUserCheck(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        console.log("Hello")
        try {
            console.log("Hii")
            const res = await axios.post("http://localhost:2024/admin/login", {
                email: email.current.value,
                password: password.current.value
            })
            
            console.log(res.data)
            window.location.replace('/adminDash')
        } catch (err) {
            alert('Invalid Credentials !')
        }
    }
    return (

        <>


            <div className="container">
            <div className='section log' id="add-form-section">

                <div className='logImg add-box-image' id="logoImg">

                    <h3 >Login</h3>

                    {/* <img src="https://i.pinimg.com/originals/ff/da/81/ffda81a5c2d5ff9ec4ff367e19b4dcff.png" alt="" /> */}

                </div>

                <form action="" className='form-control' onSubmit={handleSubmit}>

                    <div className=' add-bx inputFields '>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={emailCheck} onChange={handleEmailChange} required className='text-field' ref={email} />
                        {!isEmailValid(emailCheck) && (
                            <><span class="badge rounded-pill text-bg-info">Email not valid</span></>

                        )}
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={passwordCheck} onChange={handlePasswordChange} required className='password-field' ref={password} />
                        {!isPasswordValid(passwordCheck) && (

                            <><span class="badge rounded-pill text-bg-info">Password not valid</span></>


                        )}
                        <br></br>
                        <label htmlFor="user">Select Role</label>
                        <select name="type" onChange={handleUserChange}>

                            <option value="">Admin</option>

                            <option value="luggage">Customer</option>


                        </select>



                    </div>
                            <div id="btnGroup" >
                    <button className='btn btn-primary' type="submit">Login</button>
                    <button className='btn btn-danger'>Forgot Password</button>
                    <button className='btn btn-warning'>Back</button>
                    </div>
                    

                </form>

            </div>
            </div>


        </>



    );

};

export default Login;


