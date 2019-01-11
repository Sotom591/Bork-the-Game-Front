import React from 'react'
import tile3 from '../images/tile3.png'

const Map = (props) => {
  return(
    <div
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '880px',
        height: '440px',
        backgroundColor: '#7fe8b7',
        // backgroundImage: `${tile3}`,
        border: '4px solid black'
      }}
    />
  )
}

export default Map;
