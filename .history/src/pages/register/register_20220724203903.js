import React from 'react'
import React,{useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

export default function Register() {
    const [type,setType] = useState("Login");
    const [inputs, setInputs] = useState({});
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    return (
        <div className='test'>
            <div className='box'>
                <h1 className = "loginheader">
                    Welcome Back!
                </h1>
                <p>
                    Enter your credentials to access your accounts.
                </p>
                <form className='loginform'>
                    <input id = "email" name = "email" placeholder='Enter your email' onChange={handleChange} value = {inputs.email || ""}/>
                    <input id = "password" name = "password" placeholder='Enter your Password' onChange={handleChange} value = {inputs.password || ""}/>
                    <button type = "submit"> Sign in</button>
                </form>
            </div>
            <div>
            <p>Dont have an account? <Link to = "/register">Register</Link></p>
            

            </div>

        </div>
    )

}