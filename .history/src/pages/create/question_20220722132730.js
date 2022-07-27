import React,{useState} from "react"

function Sidebar() {



}

function Multiplechoice() {




}




export default function Question() {
  const max = 5;
  const [form,setInputs] = useState({question :'',type:'Multiple Choice',})
  const [counter,setCounter] = useState(1);
  const isMultiplechoice = (form.type == 'Multple Choice')
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
    return (
    <div className="questioncontainer">
      <input className="question" name = 'question' onChange={handleChange} placeholder = "Question Title"></input>
      <select className="dropdown" value={form.value} onChange = {handleChange} name = "type">
        <option selected value="Multiple Choice">Multiple Choice</option>
        <option value="Free Response">Free Response</option>
      </select>
      <div className="responses">
        {isMultiplechoice ? 'hi' : 'No'}
        
      </div>
    </div>
  )
}
