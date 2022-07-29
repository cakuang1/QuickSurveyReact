import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import "./create.css"


function Question() {
  return (
  <div className='questioncontainer'>

    <input placeholder='Question'/>
    <select



  </div>
  )



}


export default function Create(){
  const [questions,setQuestions] = useState(1)
  return (
    <div className='outsidecontainer'>
      <div className='titlecontainer'>
        <input className='formtitle' value = "Untitled Form" />
        <input className='formdescription' placeholder='Form Description'/>
      </div>
      <Question/>
    </div>
  )
}
