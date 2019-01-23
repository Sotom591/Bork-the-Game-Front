import React, { Component } from 'react';
import { connect } from 'react-redux';
import pupperWalk from '../images/pupperWalk.png';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../constants.js'
import { movePlayer, getTiles } from '../redux/actions';


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

observeImpassable = (newPos) => {
  const tiles = this.props.gameMap.tiles;
  const x = (newPos.x / SPRITE_SIZE);
  const y = (newPos.y / SPRITE_SIZE);
  const nextTile = tiles[y][x]
  return nextTile < 3
}

getNewPosition = (direction) =>{
  const {x, y} = this.props.player.position;
  if (this.props.player.opponent === null){
    switch(direction){
      case 'WEST':
        const newWestPos = {x: (x - SPRITE_SIZE), y}
        if (x !== 0 && this.observeImpassable(newWestPos)){
        this.props.dispatch(
          movePlayer(newWestPos,
          {a:`0px`, b:`${SPRITE_SIZE*3.7}px`}
        ))}
        break;
      case 'EAST':
        let newEastPos = {x: (x + SPRITE_SIZE), y}
        if(x <= (MAP_WIDTH - SPRITE_SIZE) && this.observeImpassable(newEastPos)){
        this.props.dispatch(
          movePlayer(newEastPos,
          {a:`0px`, b:`${SPRITE_SIZE*2.3}px`}
        ))}
        break;
      case 'NORTH':
        let newNorPos = {x, y: (y - SPRITE_SIZE)}
        if (y !== 0 && this.observeImpassable(newNorPos)){
        this.props.dispatch(
          movePlayer(newNorPos,
          {a:`0px`, b:`${SPRITE_SIZE*1}px`}
        ))}
        break;
      case 'SOUTH':
        let newSouPos = {x, y: (y + SPRITE_SIZE)}
        if(y <= (MAP_HEIGHT - SPRITE_SIZE) && this.observeImpassable(newSouPos)){
        this.props.dispatch(
          movePlayer(newSouPos,
          {a:`0px`, b:`${SPRITE_SIZE*0}px`}
        ))}
        break;
      default:
        console.log("???")
      }
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
        backgroundPosition: `${this.props.player.spritepx.a} ${this.props.player.spritepx.b}`,
        width: '48px',
        height: '44px'
      }}
     />
   )
  }
}

const mapStateToProps = (state) =>{
  return{
    player: state.player,
    gameMap: state.gameMap
  }
}

export default connect(mapStateToProps)(Player);
