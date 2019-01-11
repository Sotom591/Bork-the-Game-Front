import React from 'react';
import FightBar from '../components/FightBar'


const FightBarCont = (props) => {
  return(
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
  )
}

export default FightBarCont
