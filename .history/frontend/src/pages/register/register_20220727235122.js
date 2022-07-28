
import React,{useState} from 'react'
import Regris

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
            <div className='box2'>
                <h1 className = "loginheader">
                    Registration
                </h1>
                <p className='description'>
                    Enter your information below to complete registration
                </p>
                <form className='loginform' onSubmit= {register(inputs.email,inputs.password)}>
                    <input id = "firstname" name = "firstname" placeholder='Enter your first name' onChange={handleChange} value = {inputs.firstname || ""}/>
                    <input id = "lastname" name = "lastname" placeholder='Enter your last name' onChange={handleChange} value = {inputs.lastname || ""}/>
                    <input id = "email" name = "email" placeholder='Enter your email' onChange={handleChange} value = {inputs.email || ""}/>
                    <input id = "password" name = "password" placeholder='Enter your Password' onChange={handleChange} value = {inputs.password || ""}/>
                    <input id = "passwordchecker" name = "passwordchecker" placeholder='Re-enter Password' onChange={handleChange} value = {inputs.password || ""}/>
                    <button type = "submit"> Sign in</button>
                </form>
            </div>
            <div>
            </div>

        </div>
    )

}