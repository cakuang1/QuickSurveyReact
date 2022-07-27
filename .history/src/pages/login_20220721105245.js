import React from 'react'
import './login.css'


function Loginform() {

  return ()
  <div className='loginform'>hello
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



}


function Registerform() {
  <div className='loginform'>hello
  </div>




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
