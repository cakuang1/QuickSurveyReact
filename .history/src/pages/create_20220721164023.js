import React from'react'
import Question from './question'



export default function Create() {
return (
    <form>
    <div className="questioncontainer">
      <input className="question"></input>
      <input className="questiontype"></input>
      <div className="questions">
        <input placeholder=""></input>
      </div>
    </div>
  )
}


