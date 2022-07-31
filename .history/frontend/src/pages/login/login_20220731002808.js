
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
import "./login.css"

const url = 'http://localhost:3001/users/login'




function Login() {
    const [inputs, setInputs] = useState({});
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    function handleSubmit(event) {
        event.preventDefault()
        axios.post(url,inputs).then(res => {
            if (res.status == 200) {
                console.log(res.data)
                window.localStorage.setItem('loggedinuser',JSON.stringify(res.data))
            }
            else {
                console.log(res.status)
            }
    })

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
                <form className='loginform' onSubmit={handleSubmit}>
                    <input id = "email" name = "email" placeholder='Enter your email' onChange={handleChange} value = {inputs.email || ""}/>
                    <input id = "password" name = "password" placeholder='Enter your Password' onChange={handleChange} value = {inputs.password || ""}/>
                    <button type = "submit" > Sign in</button>
                </form>
                <div className= 'messagecontainer'>
                    <div ></div>
                </div>
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
