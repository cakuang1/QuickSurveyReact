import React, { useState } from 'react'

import "./create.css"


function Question() {


  return (
  <div className='questioncontainer'>
    <input placeholder='Question' className='question' onChange={}/>
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
  const [inputs,setInputs] = useState([<Question key={0}/>])
  const [active,setActive] = useState(0)

  function handleClick(event) {

  }

  function handleChangeTitle() {





  }

  function handleChangeQuestion() {





  }

  function handleAdd(e) {
      e.preventDefault()
      setInputs(inputs.concat(<Question key={inputs.length}/>));
  }



  return (
  <form>
    <div className='outsidecontainer'>
      <div className='titlecontainer' onClick = {handleClick}>
        <input className='formtitle' value = "Untitled Form" name = 'title' />
        <input className='formdescription' placeholder='Form Description' name = 'description'/>
      </div>
      <div >
        {inputs}
      </div>
      <div className='addquestioncontainer'>
        <button className='addquestionbutton' onClick={handleAdd}>
          Add Question
        </button>
      </div>

      <div className='createsurveybutton'>
        <button className='createbutton'>Create</button>
      </div>
    </div>
  </form>
  )
}
