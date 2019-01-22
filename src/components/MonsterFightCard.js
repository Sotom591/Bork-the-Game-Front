import React from 'react';
import { Transition } from 'semantic-ui-react'


const MonsterFightCard = (props) =>{

  return(
    <div className='monsterPic'>
      {props.name} <br/>
      <Transition animation='tada' duration={500} visible={props.visible}>
      <img alt="monster" src={props.img} />
      </Transition>
    </div>
  )
}


export default MonsterFightCard
