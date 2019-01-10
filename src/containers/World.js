import React from 'react';
import Player from '../components/Player'
import Map from '../components/Map'

const World = (props) => {
  return(
  <div
    style={{
      position: 'relative',
      width: '800px',
      height: '400px',
      margin: '20px auto'
    }}
    >
    <Map />
    <Player />
  </div>
  )
}

export default World
