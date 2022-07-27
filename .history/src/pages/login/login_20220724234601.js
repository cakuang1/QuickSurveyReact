
import React,{useState} from 'react'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import "./login.css"


function Login() {
    const [type,setType] = useState("Login");
    const [inputs, setInputs] = useState({});
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    function handleSubmit() {
        e



    }
    return (
        <div className='test'>
            <div className='box'>
                <h1 className = "loginheader">
                    Welcome Back!
                </h1>
                <p className='description'>
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


export default function LogRegi() {
    return (
    
        <Login/>
    
    )
}
