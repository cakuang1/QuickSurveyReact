import React,{useState} from "react"

export default function Question() {
  const [type,setType] = useState("Multiple Choice")



  return (
    <div className="questioncontainer">
      <input className="question"></input>
      
    </div>
  )
}
