import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div className='homecontainer'>
        <h1 className='hometitle'>QuickSurvey</h1>

        <div className='listcontainer'>
          <ol type="1">
            <li>Resgister an account and Login to save your Surveys</li>
            <li>Create a survey</li>
            <li>Milk</li>
          </ol>
        </div>
    </div>
  )
}
