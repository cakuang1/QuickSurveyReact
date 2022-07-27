import { SwipeableDrawer } from '@mui/material';
import React,{useState} from 'react'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'

import "./login.css"
function Register() {







}





export default function Login() {
    const [type,setType] = useState("Login");
    const [inputs, setInputs] = useState({});
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    return (
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
            </form>
        </div>
    )

}


export default function LogRegi() {
    <div className='container'>
        <Login/>
    </div>



}
