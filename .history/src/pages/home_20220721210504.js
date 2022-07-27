import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div className='homecontainer'>
        <h1 className='hometitle'>QuickSurvey</h1>
        <div className='listcontainer'>
          <ol type="1">
            <li>Create an account</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
        </div>
    </div>
  )
}
