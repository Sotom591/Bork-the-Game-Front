import React from 'react'
import MapTile from './MapTile'

const Map = (props) => {

  const tileMatrix = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ]

  return(
    <div
      className='worldMap'
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '888px',
        height: '448px',
        // backgroundColor: '#7fe8b7',
        border: '4px solid black'
      }}
    >
    {
      tileMatrix.map(tileRow => {
        return(<div className="tileRow">
        {tileRow.map(tile => <MapTile tile={tile} />)}
        </div>
        )
      })
    }
    </div>
  )
}


export default Map;
