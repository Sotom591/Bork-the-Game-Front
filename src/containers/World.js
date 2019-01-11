import React from 'react';
import Player from '../components/Player';
import Map from '../components/Map';
import Monsters from '../components/Monsters';

const World = (props) => {
  return(
  <div
    style={{
      position: 'relative',
      width: '880px',
      height: '440px',
      margin: '5px auto'
    }}
    >
    <Map />
    <Player />
    <Monsters />
  </div>
  )
}


export default World
