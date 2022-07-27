import React from 'react'
import './login.css'


function Loginform() {
  function handleSubmit() {




  }
  return (
    <div className='loginform'>
      <h1></h1>
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
  
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />

        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )



}


function Registerform() {
  return (
  <div className='registerform'>
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
  
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />

        </div>
        <div className="button-container">
          <input type="submit" />
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
