import React, { useState } from 'react'

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
  const [inputs,setInputs] = useState({})
  const [active,setActive] = useState

  function handleClick(event) {
    event.target.style.visibility = 'hidden';
  }



  return (
  <form>
    <div className='outsidecontainer'>
      <div className='titlecontainer' onClick = {handleClick}>
        <input className='formtitle' value = "Untitled Form" name = 'title' />
        <input className='formdescription' placeholder='Form Description' name = 'description'/>
      </div>
      <div >
        <Question/>

      </div>
      <div className='createsurveybutton'>
        <button className='createbutton'>Create</button>
      </div>
    </div>
  </form>
  )
}
