import React,{useState} from 'react'

function Register() {







}





export default function Login() {
    const [type,setType] = useState("Login");
    return (
        <div className='box'>
            <h1 className = "loginheader">
                Welcom Back!
            </h1>
            <p>
                Enter your credentials to access your accounts.
            </p>
            <form className='loginform'>
                <input id = "username" placeholder='Enter your Username'></input>




            </form>







        </div>






    )





}
