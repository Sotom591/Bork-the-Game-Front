import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MONSTER_SIZE } from '../constants.js'
import { setOpponent, moveMonster} from '../redux/actions';



class Monsters extends Component {


componentDidMount(){
  this.movementInterval = setInterval(this.monsterMoveLogic, this.props.monster.speed)
  this.collisionChecker = setInterval(this.checkCollision, 50)
}

componentDidUpdate(){
  this.freezeMonsters = this.props.player.opponent ? clearInterval(this.movementInterval) : null
}
checkCollision = () => {
  const monster = this.props.monster
  if(this.props.player.position.x === monster.x && this.props.player.position.y === monster.y){
    return this.props.dispatch(setOpponent(monster))
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
    player: state.player
  }
}

export default connect(mapStateToProps)(Monsters)
