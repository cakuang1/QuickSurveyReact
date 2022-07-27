import React,{useState} from 'react'
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill}
function Register() {







}





export default function Login() {
    const [type,setType] = useState("Login");
    const [info,setInfo] = useState({email:"",password:""})
    return (
        <div className='box'>
            <h1 className = "loginheader">
                Welcom Back!
            </h1>
            <p>
                Enter your credentials to access your accounts.
            </p>
            <form className='loginform'>
                <input id = "email" name = "email" placeholder='Enter your email'></input>
                <input id = "password" name = "password" placeholder='Enter your Password'></input>


            </form>







        </div>






    )





}
