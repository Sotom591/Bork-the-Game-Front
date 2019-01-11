import React from 'react';
import { connect } from 'react-redux';
import FightBar from '../components/FightBar'


const FightBarCont = (props) => {

  return(
  <div>
  {props.player.position.x === props.monster1.position.x  && props.player.position.y === props.monster1.position.y ?
  <div
    style={{
      position: 'relative',
      width: '880px',
      height: '240px',
      margin: '5px auto'
    }}
    >
    <FightBar />
    </div>
       : null}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    ...state
  }
}

export default connect(mapStateToProps)(FightBarCont)

//
