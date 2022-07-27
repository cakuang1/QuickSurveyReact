import React,{useState} from "react"
import {IoMdAddCircleOutline} from "react-icons/io"
import {}


function Sidebar() {
  return (
  <div className="sidebar">
    <button className="addbutton"><IoMdAddCircleOutline/></button>
    <button className="deletebutton">Delete</button>
  </div>
  )
}

function Multiplechoice() {




}




export default function Question() {
  const max = 5;
  const [form,setInputs] = useState({question :'',type:'Multiple Choice',})
  const isMultiplechoice = (form.type == 'Multiple Choice')
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
    return (
    <div className="lcontainer">
      <div className="questioncontainer">
        <input className="question" name = 'question' onChange={handleChange} placeholder = "Question Title"></input>
        <select className="dropdown" value={form.value} onChange = {handleChange} name = "type">
          <option selected value="Multiple Choice">Multiple Choice</option>
          <option value="Free Response">Free Response</option>
        </select>
      </div>
      <Sidebar/>
    </div>
  )
}
