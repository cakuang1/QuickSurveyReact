import React,{useState} from "react"

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
      <input className="question" name = 'question' onChange={handleChange}></input>
      <select className="dropdown" value={type.value} onChange = {handleChange} name = "type">
        <option selected value="Multiple Choice">Free Response</option>
        <option value="Free Response">Free Response</option>
      </select>
      <div className="responses">
        <input placeholder=""></input>

      </div>
    </div>
  )
}
