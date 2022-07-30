import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import "./create.css"


function Question() {


  return (
  <div className='questioncontainer'>

    <input placeholder='Question' className='question'/>
    <select className='selector'>
      <option value={1}>Multiple Choice</option>
    </select>
    <div className='optioncontainer'>
      <div>
        <input className='options'></input>
      </div>
    </div>
  </div>
  )



}


export default function Create(){
  const [questions,setQuestions] = useState(1)
  const [active,setActive] = useState(0)




  return (
  <form>
    <div className='outsidecontainer'>
      <div className='titlecontainer'>
        <input className='formtitle' value = "Untitled Form" />
        <input className='formdescription' placeholder='Form Description'/>
      </div>
      <div className='questioncontainer'>
        <Question/>

      </div>
      
    </div>
  </form>
  )
}
