import React from 'react'
import { Link } from 'react-router-dom'

const BackStory = () =>{
  return(
    <div>
    <div className="ui raised very padded text container segment">
      <p>Bork, the neighborhood stray...</p>
    </div>
      <Link to={'/play'}>
         <button>Start Game</button>
       </Link>
       <Link to={'/'}>
        <button>Home</button>
      </Link>
    </div>
  )
}

export default BackStory
