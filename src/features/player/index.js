import React from 'react';
import pupperWalk from './pupperWalk.png';
import { connect } from 'react-redux';

const Player = (props) =>{
  return(
    <div
      style={{
        position: 'relative',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${pupperWalk})`,
        backgroundPosition: '0 0',
        width: '44px',
        height: '49px'
      }}
     />
  )
}

const mapStateToProps = (state) =>{
  return{
    ...state.player
  }
}

export default connect(mapStateToProps)(Player);
