import React from'react'
import Question from './question'
import './create.css'



export default function Create() {

  
return (
  <div classname = 'qcontainer'>
    <form>
    <input className='qtitle' placeholder='Title'></input>
    <Question/>
    </form>
  </div> 

  )
}


