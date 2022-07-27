import React,{useState} from "react"

export default function Question() {
  const [type,setType] = useState("Multiple Choice")
  const [counter,setCounter] = useState()



  return (
    <div className="questioncontainer">
      <input className="question"></input>

    </div>
  )
}
