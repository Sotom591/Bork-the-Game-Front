import React from 'react';


const MonsterHPBar = (props) => {
  return(
    <div className="monsterBar">
      <div className="monsterHP"
      style={{
        width: `${props.hp * 10}%`
      }}>
        <div className="monsterHit">
        </div>
      </div>
    </div>
  )
}


export default MonsterHPBar
