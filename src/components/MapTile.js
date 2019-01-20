import React from 'react'
import { SPRITE_SIZE } from '../constants.js'
import '../App.css'

const MapTile = (props) =>{
  const getTileType = (type) =>{
    switch(type){
      case 0:
        return 'floor'
      case 5:
        return 'table'
      case 6:
        return 'walltop'
      case 7:
        return 'midwalltop'
      case 8:
        return 'wallbottom'
      case 9:
        return 'midwallbottom'
      default:
        return null
    }
  }

  return(
    <div className={`tile ${getTileType(props.tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
        color: 'rgba(0, 0, 0, 0)'
      }}
    >
  |
    </div>
  )
}


export default MapTile;
