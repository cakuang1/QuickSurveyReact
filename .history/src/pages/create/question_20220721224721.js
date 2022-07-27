import React,{useState} from "react"

export default function Question() {
  const max = 5;
  const [] = useState("Multiple Choice")
  const [counter,setCounter] = useState(1);

  const handleClick = () => {
    


  }
    return (
    <div className="questioncontainer">
      
      <input className="question"></input>
      <select id="cars" name="cars">
        <option value="volvo
        ">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      <div className="questions">
        <input placeholder=""></input>
        <button>Add new answer</button>
      </div>
    </div>
  )
}
