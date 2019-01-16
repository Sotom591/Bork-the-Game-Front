import React from 'react';


const PlayerHPBar = (props) => {
  console.log(props.hp)
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
