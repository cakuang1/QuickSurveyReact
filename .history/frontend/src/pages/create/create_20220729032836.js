import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import "./create.css"

function SelectBasicExample() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>

    </Form.Select>
  );
}
function Question() {
  return (
  <div className='questioncontainer'>

    <input placeholder='Question'/>
    <SelectBasicExample/>



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
