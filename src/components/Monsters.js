import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MONSTER_SIZE } from '../constants.js'
import { setOpponent, moveMonster, killMonster, trackDeaths, incPlayerHp} from '../redux/actions';



class Monsters extends Component {



componentDidMount(){
  // window.addEventListener('keydown', (e) => {
  //   this.startMovementInterval(e)
  // })
  this.movementInterval = setInterval(this.monsterMoveLogic, this.props.monster.speed)
  this.collisionChecker = setInterval(this.monsterLifecycle, 100)
}
componentDidUpdate(prevProps){
  if (prevProps.player.opponent === null && this.props.player.opponent) {
    clearInterval(this.movementInterval)
  } else if (prevProps.player.opponent && this.props.player.opponent === null)
  {
    this.movementInterval = setInterval(this.monsterMoveLogic, this.props.monster.speed)
  }
}

// startMovementInterval = (e) => {
//   e.preventDefault()
//   switch(e.keyCode){
//   case 32:
//     return this.movementInterval()
//   default:
//     console.log(e.keyCode)
//   }
// }

// movementInterval = () => {
//   setInterval(this.monsterMoveLogic, this.props.monster.speed)
// }
componentWillUnmount(){
  console.log("unmounting");
  clearInterval(this.movementInterval)
  clearInterval(this.collisionChecker)
}

monsterLifecycle = () => {
  this.checkCollision()
  if(this.props.player.opponent && this.props.player.opponent.id === this.props.monster.id){
    this.checkHp()
  }
}

checkCollision = () => {
  const monster = this.props.monster
  if(this.props.player.position.x === monster.x && this.props.player.position.y === monster.y){
    this.props.dispatch(setOpponent(monster))

  }
}

checkHp = () =>{
  const monster = this.props.monster
  const monsters = this.props.monsters.data
  let id = this.props.monster.id
  let newMonsters = monsters.filter(monster => monster.id !== id)

  if(monster.hp <= 0){
    this.props.dispatch(killMonster(newMonsters))
    this.props.dispatch({type: "CLEAR"})
    this.props.dispatch(trackDeaths())
    this.props.dispatch(incPlayerHp())
  }
}

monsterMoveLogic = () =>{
  let id = this.props.monster.id
  let x = this.props.monster.x
  let y = this.props.monster.y

  if(x < this.props.player.position.x){
      x += MONSTER_SIZE
  }
  if(x > this.props.player.position.x){
      x -= MONSTER_SIZE
  }
  if(y < this.props.player.position.y){
      y += MONSTER_SIZE
  }
  if(y > this.props.player.position.y){
      y -= MONSTER_SIZE
  }
    this.props.dispatch(moveMonster(id, {x, y}))

}

//check coords before move happens
// checkMonsterCollision = () =>{
//
// }

render(){
  return(
    <div
    style={{
      position: 'absolute',
      top: this.props.monster.y,
      left: this.props.monster.x,
      backgroundImage: `url(${this.props.monster.img})`,
      backgroundPosition: '0 0',
      width: '46px',
      height: '48px'
    }}
    />
  )}
}

const mapStateToProps = (state) =>{
  return{
    player: state.player,
    monsters: state.monsters
  }
}

export default connect(mapStateToProps)(Monsters)
