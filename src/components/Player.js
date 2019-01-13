import React, { Component } from 'react';
import { connect } from 'react-redux';
import pupperWalk from '../images/pupperWalk.png';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../constants.js'
import { movePlayer } from '../redux/actions';

// const MAP_HEIGHT = SPRITE_SIZE * 10

class Player extends Component{

  componentDidMount(){
    window.addEventListener('keydown', (e) => {
      this.handleKeyDown(e)
    })
  }

  handleKeyDown = (e) => {
    e.preventDefault()
    switch(e.key){

      case 'a':
        return this.getNewPosition('WEST')
      case 'd':
        return this.getNewPosition('EAST')
      case 'w':
        return this.getNewPosition('NORTH')
      case 's':
        return this.getNewPosition('SOUTH')
      case 'b':
        return console.log("BORK!")
      default:
        console.log(e.key)
    }
  }

  getNewPosition = (direction, walkIndex) =>{
    const indexWalk = this.props.player.indexWalk;
    const {x, y} = this.props.player.position;
    switch(direction){
      case 'WEST':
      if (x !== 0){
      this.props.dispatch( movePlayer({x: (x - SPRITE_SIZE), y}, `0px ${SPRITE_SIZE * 3.7}px`, indexWalk))}
        break;
      case 'EAST':
        if(x <= (MAP_WIDTH - SPRITE_SIZE) ){
        this.props.dispatch( movePlayer({x: (x + SPRITE_SIZE), y}, `0px ${SPRITE_SIZE * 2.3}px`, indexWalk))}
        break;
      case 'NORTH':
        if (y !== 0){
        this.props.dispatch( movePlayer({x, y: (y - SPRITE_SIZE)}, `0px ${SPRITE_SIZE * 1}px`, indexWalk))}
        break;
      case 'SOUTH':
        if(y <= (MAP_HEIGHT - SPRITE_SIZE)){
        this.props.dispatch( movePlayer({x, y: (y + SPRITE_SIZE)}, `0px ${SPRITE_SIZE * 0}px`, indexWalk))}
        break;
      default:
        console.log("???")
      }
    }

  getWalkIndex = () =>{

    const index = this.props.player.walkIndex
    return  index >=3 ? 0 : index + 1
  }

render(){
  return(
    <div
      style={{
        position: 'absolute',
        top: this.props.player.position.y,
        left: this.props.player.position.x,
        backgroundImage: `url(${pupperWalk})`,
        backgroundPosition: `${this.props.player.spritepx}`,
        width: '48px',
        height: '44px'
      }}
     />
   )
  }

}

// movePlayer(direction, spritepx, facing)

// const SPRITE_SIZE = 44;
// const MAP_HEIGHT = SPRITE_SIZE * 9;
// const MAP_WIDTH = SPRITE_SIZE * 19;

const mapStateToProps = (state) =>{
  return{
    player: state.player
  }
}

export default connect(mapStateToProps)(Player);
