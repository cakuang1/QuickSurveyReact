import React,{useState} from "react"

export default function Question() {
  const max = 5;
  const [type,setType] = useState({value:})
  const [counter,setCounter] = useState(1);

  const handleClick = () => {
    set


  }
    return (
    <div className="questioncontainer">
      <input className="question"></input>
      <select className="dropdown" value={type.value} onChange = {handleClick}>
        <option selected value="Multiple Choice">Free Response</option>
        <option value="Free Response">Free Response</option>

      </select>
      <div className="questions">
        <input placeholder=""></input>
        <button>Add new answer</button>
      </div>
    </div>
  )
}
