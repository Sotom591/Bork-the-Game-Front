import React from 'react'
import { SPRITE_SIZE } from '../constants.js'
import '../worldStyles.css'

const MapTile = (props) =>{
  console.log(props)

  const getTileType = (type) =>{
    switch(type){
      case 0:
        return 'floor'
      case 5:
        return 'door'
      case 6:
        return 'table'
      case 7:
        return 'wall'
      default:
        return null
    }
  }

  return(
    <div className={`tile ${getTileType(props.tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE
      }}
    >
    |
    </div>
  )
}


export default MapTile;
