import React,{useState} from "react"

function Sidebar() {



}

function Multiplechoice() {




}




export default function Question() {
  const max = 5;
  const [type,setInputs] = useState({question :'',type:'Multiple Choice',})
  const [counter,setCounter] = useState(1);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
    return (
    <div className="questioncontainer">
      <input className="question" name = 'question' onChange={handleChange} placeholder = "Question Title"></input>
      <select className="dropdown" value={type.value} onChange = {handleChange} name = "type">
        <option selected value="Multiple Choice">Multiple Choice</option>
        <option value="Free Response">Free Response</option>
      </select>
      <div className="responses">
        {}
        <input placeholder="Option 1"></input>
      </div>
    </div>
  )
}
