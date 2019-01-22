import React from 'react'
import { Link } from 'react-router-dom'

const StartScreen = () =>{
  return(
    <div className="start-screen">
     <Link to={'/play'}>
        <button className="btn">start</button>
      </Link>
      <br/>
      <Link to={'/backstory'}>
        <button className="btn">story</button>
      </Link>
    </div>
  )
}

export default StartScreen
