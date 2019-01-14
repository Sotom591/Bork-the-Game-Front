import React from 'react';
import { connect } from 'react-redux';
import { SPRITE_SIZE, NOODLES_SIZE } from '../constants.js'
// import FightBar from '../components/FightBar'
import PlayerAttackMoves from '../components/PlayerAttackMoves.js'
import PlayerFightCard from '../components/PlayerFightCard.js'
import PlayerHPBar from '../components/PlayerHPBar.js'
import MonsterFightCard from '../components/MonsterFightCard.js'
import MonsterHPBar from '../components/MonsterHPBar.js'




const FightBarCont = (props) => {

const checkCollision = () => {
  if(props.player.position.x === props.noodles.position.x && props.player.position.y === props.noodles.position.y){
  return true}
}
// const checkCollision = () =>{
  // const {x, y} = props.noodles.position
  // debugger
  // const xCoords = ((x + 36/2) >= props.player.position.x &&
  // (x + 36/2) <= (props.player.position.x + 22))
  //
  // const yCoords = ((y + 60/2) >= props.player.position.y &&
  // (y + 60/2) <= (props.player.position.y + 22))
  // console.log(xCoords, yCoords)
// }
  return(
  <div>
  {checkCollision() ?
  <div
    style={{
      position: 'relative',
      width: '888px',
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
           width: '888px',
           height: '240px',
           backgroundColor: 'tan',
           border: '4px solid black'
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
