import React from 'react'

export default function Register() {
  return (
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

  )
}
