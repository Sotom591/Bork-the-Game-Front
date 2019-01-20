import React from 'react'
import MapTile from './MapTile'

const Map = (props) => {

  const tileMatrix = [
    [6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0],
  ]

  return(
    <div
      className='worldMap'
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '880px',
        height: '440px',
        border: '4px solid black',

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
