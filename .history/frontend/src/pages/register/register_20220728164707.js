
import React,{useState} from 'react'
import axios from 'axios'

const server = 'http://localhost:3001/users'




export default function Register() {
    const [inputs, setInputs] = useState({});
    const [messages,setMessages] = useState([])
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    async function handleSubmit(e) {
        e.preventDefault()
        axios.post(server,inputs).then(res =>
            setMessages(res)
            con.log(res)
        )

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
                <form className='loginform' onSubmit={handleSubmit}>
                    <input id = "firstname" name = "firstname" placeholder='Enter your first name' onChange={handleChange} value = {inputs.firstname || ""}/>
                    <input id = "lastname" name = "lastname" placeholder='Enter your last name' onChange={handleChange} value = {inputs.lastname || ""}/>
                    <input id = "email" name = "email" placeholder='Enter your email' onChange={handleChange} value = {inputs.email || ""}/>
                    <input id = "password" name = "password" placeholder='Enter your Password' onChange={handleChange} value = {inputs.password || ""}/>
                    <input id = "passwordchecker" name = "passwordchecker" placeholder='Re-enter Password' onChange={handleChange} value = {inputs.passwordchecker || ""}/>
                    <button type = "submit"> Sign in</button>
                </form>
                <ul>
                {messages.map(message => <li>{message.msg}</li>
                    )}
                </ul>
            </div>
            <div>
            </div>

        </div>
    )

}