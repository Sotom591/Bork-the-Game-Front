import React from 'react';
import Player from '../components/Player';
import Map from '../components/Map';
import Monsters from '../components/Monsters';

const World = (props) => {
  return(
  <div
    style={{
      position: 'relative',
      width: '888px',
      height: '448px',
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
