import React from 'react'
import { Link } from 'react-router-dom'

const StartScreen = () =>{
  return(
    <div className="start-screen">
     <Link to={'/play'}>
        <button>Start Game</button>
      </Link>
    </div>
  )
}

export default StartScreen
