import React, { Component } from 'react';
import { connect } from 'react-redux';
import noodles from '../images/angrynoodlest.png';
import { MONSTER_SIZE } from '../constants.js'
import { moveMonster} from '../redux/actions';



class Monsters extends Component {


componentDidMount(){
  this.movementInterval()
  // this.movementInterval = setInterval(this.monsterLogic, 2000)
}
//
movementInterval = () =>{
  setInterval(this.monsterLogic, 2000)
}

monsterLogic = () =>{
  const {x, y} = this.props.monsters.position;

  if(x < this.props.player.position.x){
    this.props.dispatch(
      moveMonster({x: (x + MONSTER_SIZE), y}
    )) }
  if(x > this.props.player.position.x){
    this.props.dispatch(
      moveMonster({x: (x - MONSTER_SIZE), y}
    )) }

  if(y < this.props.player.position.y){
    this.props.dispatch(
      moveMonster({x, y: (y + MONSTER_SIZE)}
    )) }

  if(y > this.props.player.position.y){
    this.props.dispatch(
      moveMonster({x, y: (y - MONSTER_SIZE)}
    )) }
}

render(){
  return(
    <div
    style={{
      position: 'absolute',
      top: this.props.monsters.position.y,
      left: this.props.monsters.position.x,
      backgroundImage: `url(${noodles})`,
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
    monsters: state.monsters,
    player: state.player
  }
}

export default connect(mapStateToProps)(Monsters)
