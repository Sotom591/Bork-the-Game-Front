import React from 'react';


const MonsterFightCard = (props) => {
  return(
    <div className='monsterPic'>
      {props.name} <br/>
      <img alt="monster" src={props.img} />
    </div>
  )
}


export default MonsterFightCard
