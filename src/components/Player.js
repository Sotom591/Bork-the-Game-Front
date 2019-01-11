import React, { Component } from 'react';
import { connect } from 'react-redux';
import pupperWalk from '../images/pupperWalk.png';
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

  getNewPosition = (direction) =>{
    const {x, y} = this.props.player.position;
    switch(direction){
      case 'WEST':
      if (x !== 0){
        this.props.dispatch( movePlayer({x: (x - SPRITE_SIZE), y}))}
        break;
      case 'EAST':
        if(x <= (MAP_WIDTH - SPRITE_SIZE) ){
        this.props.dispatch( movePlayer({x: (x + SPRITE_SIZE), y}))}
        break;
      case 'NORTH':
        if (y !== 0){
        this.props.dispatch( movePlayer({x, y: (y - SPRITE_SIZE)}))}
        break;
      case 'SOUTH':
        if(y <= (MAP_HEIGHT - SPRITE_SIZE)){
        this.props.dispatch( movePlayer({x, y: (y + SPRITE_SIZE)}))}
        break;
      default:
        console.log("???")
      }
    }

render(){
  return(
    <div
      style={{
        position: 'absolute',
        top: this.props.player.position.y,
        left: this.props.player.position.x,
        backgroundImage: `url(${pupperWalk})`,
        backgroundPosition: '0 0',
        width: '42px',
        height: '44px'
      }}
     />
   )
  }

}

const SPRITE_SIZE = 44;
const MAP_HEIGHT = SPRITE_SIZE * 9;
const MAP_WIDTH = SPRITE_SIZE * 19;

const mapStateToProps = (state) =>{
  return{
    player: state.player
  }
}

export default connect(mapStateToProps)(Player);
