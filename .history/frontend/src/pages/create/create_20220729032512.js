import React, { useState } from 'react'
import "./create.css"


function Question() {
  <div className='questioncontainer'>

    <input placeholder='Question'/>








  </div>




}


export default function Create(){
  const [questions,setQuestions] = useState(1)
  return (
    <div className='outsidecontainer'>
      <div className='titlecontainer'>
        <input className='formtitle' value = "Untitled Form" />
        <input className='formdescription'/>
      </div>
      <Question/>
    </div>
  )
}
