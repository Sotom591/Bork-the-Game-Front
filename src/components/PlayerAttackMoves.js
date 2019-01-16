import React from 'react';
import { connect } from 'react-redux'


const PlayerAttackMoves = (props) =>{
    return(
      <div className='playerMoves'>
      {props.attack ? props.attack.map(attack => <button onClick={() => props.dmgMonster(attack)}>{attack.name}</button>)
        : null }
      </div>
    )
}

export default PlayerAttackMoves
