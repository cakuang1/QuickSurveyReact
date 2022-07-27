import React,{useState} from "react"

export default function Question() {
  const max = 5;
  const [type,setType] = useState("Multiple Choice")
  const [counter,setCounter] = useState(1);

  const handleClick = () => {
    


  }
    return (
    <div className="questioncontainer">
      
      <input className="question"></input>
      <select className="">
        <option selected value="Multiple Choice">Free Response</option>
        <option value="Free Response">Saab</option>

      </select>
      <div className="questions">
        <input placeholder=""></input>
        <button>Add new answer</button>
      </div>
    </div>
  )
}
