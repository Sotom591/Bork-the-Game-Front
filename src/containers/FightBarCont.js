import React from 'react';
import { connect } from 'react-redux';
// import FightBar from '../components/FightBar'
import PlayerAttackMoves from '../components/PlayerAttackMoves.js'
import PlayerFightCard from '../components/PlayerFightCard.js'
import PlayerHPBar from '../components/PlayerHPBar.js'
import MonsterFightCard from '../components/MonsterFightCard.js'
import MonsterHPBar from '../components/MonsterHPBar.js'




const FightBarCont = (props) => {

  return(
  <div>
  {props.player.position.x === props.monster1.position.x  && props.player.position.y === props.monster1.position.y ?
  <div
    style={{
      position: 'relative',
      width: '880px',
      height: '240px',
      margin: '5px auto'
    }}
    >
      <div
         className='fightBar'
         style={{
           position: 'relative',
           top: '0px',
           left: '0px',
           width: '880px',
           height: '240px',
           backgroundColor: 'tan',
           border: '4px solid white'
        }}
        >
        <MonsterFightCard/>
        <MonsterHPBar/>
        <PlayerFightCard/>
        <PlayerHPBar/>
        <PlayerAttackMoves/>

      </div>
    </div>
       : null}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    ...state
  }
}

export default connect(mapStateToProps)(FightBarCont)

//
