import React, { useState } from 'react'
import "./create.css"

function SelectBasicExample() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}
function Question() {
  return (
  <div className='questioncontainer'>

    <input placeholder='Question'/>








  </div>
  )



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
