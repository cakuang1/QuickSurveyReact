import React from'react'
import Question from './question'
import './create.css'



export default function Create() {

return (
  <div classname = 'qcontainer'>
    <form>
    <div>
      <input className='qtitle' placeholder=''></input>
    </div>
    <Question/>
    </form>
  </div> 

  )
}


