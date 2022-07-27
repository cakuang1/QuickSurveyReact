import React from 'react'
import './login.css'
import Button from '@mui/material/Button'

function Loginform() {
  function handleSubmit() {




  }
  return (
    <div className='loginform'>
      <h1 className='logintitle'>Login</h1>
      <form>
        <div className="input-container">

          <input type="text" placeholder = "Enter username" name="uname" required />
  
        </div>
        <div className="input-container">

          <input type="password" placeholder = "Enter Password" name="pass" required />

        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )



}


function Registerform() {


  function handleSubmit() {



  }
  return (
  <div className='registerform'>
    <h1 class = "logintitle">Register</h1>
      <form>
        <div className="input-container">
          <input type="text" name="uname" placeholder='' required />
  
        </div>
        <div className="input-container">
          <input type="password" name="pass" required />

        </div>
        <div className="input-container">
          <input type="password" name="passchecker" required />

        </div>
        <div className="button-container">
        <Button variant="contained" sx = {{m: 200px}}>Hello World</Button>;
        </div>
      </form>
  </div>
  )




}







export default function Login() {

  return (
    <div className='lrcontainer'>
      <div className='logincontainer'>
        <Loginform/>
      </div>
      <div className='registercontainer'>
        <Registerform/>
      </div>
    </div>

  )
}
