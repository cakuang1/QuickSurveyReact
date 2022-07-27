import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div className='homecontainer'>
        <h1 className='hometitle'>QuickSurvey</h1>

        <div className='listcontainer'>
          <ol type="1">
            <li>Resgister an account and Login to save your Surveys</li>
            <li>Create a survey by clicking on the 'Create' tab</li>
            <li>Share your survey by clicking on the 'Surveys' tab and</li>
          </ol>
        </div>
    </div>
  )
}
