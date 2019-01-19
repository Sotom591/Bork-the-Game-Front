import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decMonsterHp } from '../redux/actions';

import PlayerAttackMoves from '../components/PlayerAttackMoves.js'
import PlayerFightCard from '../components/PlayerFightCard.js'
import PlayerHPBar from '../components/PlayerHPBar.js'
import MonsterFightCard from '../components/MonsterFightCard.js'
import MonsterHPBar from '../components/MonsterHPBar.js'


class FightBarCont extends Component{

dmgMonster = (attack) => {
  let monster = this.props.monster ? this.props.monster : null
  let dmg = (monster.hp - attack.dmg)
  this.props.decMonsterHp(monster.id, dmg)
  console.log(dmg)

}

render(){

  return(
  <div
    style={{
      position: 'relative',
      width: '880px',
      height: '240px',
      margin: '5px auto'
    }}
    >
      <div
         className='fightBar'
         style={{
           position: 'relative',
           top: '0px',
           left: '0px',
           width: '880px',
           height: '240px',
           border: '4px solid black'
        }}
        >
        <MonsterFightCard name={this.props.monster.name} img={this.props.monster.img}/>
        <PlayerAttackMoves dmgMonster={this.dmgMonster} attack={this.props.player ? this.props.player.player_attacks.filter(attack => attack.id !==3) : null}/>
        <MonsterHPBar  hp={this.props.monster ? this.props.monster.hp : null}/>
        <PlayerFightCard />
        <PlayerHPBar hp={this.props.player ? this.props.player.hp : null}/>
      </div>
    </div>
  )
}

}


export default connect(null, {decMonsterHp})(FightBarCont)
