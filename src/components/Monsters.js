import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MONSTER_SIZE } from '../constants.js'
import { moveMonster} from '../redux/actions';



class Monsters extends Component {


componentDidMount(){
  this.movementInterval()
  // this.movementInterval = setInterval(this.monsterLogic, 2000)
}
//move monsters until a monster is added into a capMonst array capMonstArray.length > 0 ? stop moving, also, monsters will be added to capMonstArray and taken out of monster array so they are no longer rendered on the board

movementInterval = () =>{
  setInterval(this.monsterMoveLogic, this.props.monster.speed)
}

monsterMoveLogic = () =>{
  // const {x, y} = this.props.monsters.position;
  // const {x, y} = {this.props.monsters.x, this.props.monsters.data.y}
  let id = this.props.monster.id
  let x = this.props.monster.x
  let y = this.props.monster.y
  // debugger

  if(x < this.props.player.position.x){
      x += MONSTER_SIZE }
  if(x > this.props.player.position.x){
      x -= MONSTER_SIZE }
  if(y < this.props.player.position.y){
      y += MONSTER_SIZE }
  if(y > this.props.player.position.y){
      y -= MONSTER_SIZE }
    this.props.dispatch(
      moveMonster(id, {x, y}))
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
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    player: state.player
  }
}

export default connect(mapStateToProps)(Monsters)
