import React from 'react';


const PlayerHPBar = (props) => {
  return(
    <div className='playerBar'>
    <div className="playerHP"
    style={{
      width: `${props.hp * 10}%`
    }}>
      <div className="playerHit">
      </div>
    </div>
    </div>
  )
}


export default PlayerHPBar
