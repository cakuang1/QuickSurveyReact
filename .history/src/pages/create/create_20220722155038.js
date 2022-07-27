import React from'react'
import Question from './question'
import './create.css'



export default function Create() {

return (
  <div classname = 'qcontainer'>
    <form>
    <div className='qtitlecontainer'>
      <input className='qtitle' placeholder='Survey Name'></input>
    </div>
    <Question/>
    </form>
  </div> 

  )
}


