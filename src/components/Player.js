import React, { Component } from 'react';
import { connect } from 'react-redux';
import pupperWalk from '../pupperWalk.png';
import { movePlayer } from '../redux/actions'

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
    const SPRITE_SIZE = 44
    const {x, y} = this.props.player.position;
    switch(direction){
      case 'WEST':
        this.props.dispatch( movePlayer({x: (x - SPRITE_SIZE), y}))
        break;
      case 'EAST':
        this.props.dispatch( movePlayer({x: (x + SPRITE_SIZE), y}))
        break;
      case 'NORTH':
        this.props.dispatch( movePlayer({x, y: (y - SPRITE_SIZE)}))
        break;
      case 'SOUTH':
        this.props.dispatch( movePlayer({x, y: (y + SPRITE_SIZE)}))
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
        width: '44px',
        height: '49px'
      }}
     />
   )
  }

}


const mapStateToProps = (state) =>{
  return{
    ...state
  }
}

export default connect(mapStateToProps)(Player);
