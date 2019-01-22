import React from 'react';
import { Transition } from 'semantic-ui-react'


const PlayerFightCard = (props) => {
  return(
  <div className='playerPic'>
    Bork <br/>
    <Transition animation='bounce' duration={500} visible={props.visible}>
    <img alt="pupper" src="https://i.imgur.com/C7xCE5u.png?1" />
    </Transition>
  </div>
  )
}


export default PlayerFightCard
