import React from 'react';
import { connect } from 'react-redux';
import pupperWalk from './pupperWalk.png';
import { movePlayer } from '../../redux/actions'

const Player = (props) =>{

  // componentDidMount(){
    window.addEventListener('keydown', (e) => {
      handleKeyDown(e)
    })
  // }

  const handleKeyDown = (e) => {
    e.preventDefault()

  //look up e.key
    switch(e.keyCode){
      case 65:
        return getNewPosition('WEST')
      case 68:
        return getNewPosition("EAST")
      case 87:
        return getNewPosition("NORTH")
      case 83:
        return getNewPosition("SOUTH")
      case 66:
        return console.log("BORK!")
      default:
        console.log(e.keyCode)
    }

  }

  const getNewPosition = (direction) =>{
    const SPRITE_SIZE = 49
    const {x, y} = props.player.position;
    // return [ oldPos[0] - SPRITE_SIZE, oldPos[1] ]
    switch(direction){
      case 'WEST':
        props.dispatch( movePlayer({x: x - SPRITE_SIZE}, y))
        break;
      case 'EAST':
        props.dispatch( movePlayer({x: x + SPRITE_SIZE}, y))
        break;
      case 'NORTH':
        props.dispatch( movePlayer({x, y: y - SPRITE_SIZE}))
        break;
        // return [ oldPos[0], oldPos[1] - SPRITE_SIZE ]
      case 'SOUTH':
        props.dispatch( movePlayer({x, y: y + SPRITE_SIZE}))
        break;
      default:
        console.log("???")
    }
  }

  return(
    <div
      style={{
        position: 'absolute',
        top: props.player.position.y,
        left: props.player.position.x,
        backgroundImage: `url(${pupperWalk})`,
        backgroundPosition: '0 0',
        width: '44px',
        height: '49px'
      }}
     />
  )
}




const mapStateToProps = (state) =>{
  return{
    ...state
  }
}

export default connect(mapStateToProps)(Player);
