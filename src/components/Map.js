import React from 'react';
import MapTile from './MapTile';
import { connect } from 'react-redux';
import { getTiles } from '../redux/actions';

const Map = (props) => {

  return(
    <div
      className='worldMap'
      style={{
        position: 'relative',
        top: '0px',
        left: '0px',
        width: '880px',
        height: '440px',
        border: '4px solid black'
      }}
    >
    {
      props.gameMap.tiles.map(tileRow => {
        return(<div className="tileRow">
        {tileRow.map(tile => <MapTile tile={tile} />)}
        </div>
        )
      })
    }
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    gameMap: state.gameMap
  }
}

export default connect(mapStateToProps)(Map);
