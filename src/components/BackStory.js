import React from 'react'
import { Link } from 'react-router-dom'

const BackStory = () =>{
  return(
    <div className="back-story">
    <div className="ui raised very padded text container segment">
      <p>Your story begins with you as Bork, the neighborhood doggo. It was a regular day as you strolled the town looking for your next meal. Suddenly, a few shops over, a restaurant door swings open and a crowd of screaming humans run out. </p>
       <p>Maybe they were celebrating because everything tasted so good?</p>
      <p> Well, since no pup should never waste a perfect opportunity for a taste test, you speed up towards the restaurant. But, as you enter, you notice something about the food seems a little... off. </p>
    </div>
    <div className="storyBtns">
       <Link to={'/'}>
        <button className="btn">back</button>
      </Link>
      <Link to={'/play'}>
         <button className="btn">continue</button>
      </Link>
    </div>
    </div>
  )
}

export default BackStory
