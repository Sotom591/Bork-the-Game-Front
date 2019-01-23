import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decMonsterHp, decPlayerHp } from '../redux/actions';
import LoseScreenCont from './LoseScreenCont'
import PlayerAttackMoves from '../components/PlayerAttackMoves.js'
import PlayerFightCard from '../components/PlayerFightCard.js'
import PlayerHPBar from '../components/PlayerHPBar.js'
import MonsterFightCard from '../components/MonsterFightCard.js'
import MonsterHPBar from '../components/MonsterHPBar.js'



class FightBarCont extends Component{

  state = { monsterVisible: true, playerVisible: true }
  attackBtns = () => document.querySelectorAll('button.attackBtn')

  toggleMonster = () => this.setState({ monsterVisible: !this.state.monsterVisible })

  togglePlayer = () => this.setState({ playerVisible: !this.state.playerVisible })

  dmgMonster = (attack) => {
    this.attackBtns().forEach(attack => attack.disabled = true)
    setTimeout(this.attackCooldown, 2000 )
    let monster = this.props.monster ? this.props.monster : null
    let monsterDmg = (monster.hp - attack.dmg)
    this.props.decMonsterHp(monster.id, monsterDmg)
    this.togglePlayer()
    setTimeout(this.dmgPlayer, 1000);
    setTimeout(this.toggleMonster, 1000)
  }

  attackCooldown = () => {
    this.attackBtns().forEach(attack => attack.disabled = false)
  }

  dmgPlayer = () =>{
    let monster = this.props.monster ? this.props.monster : null
    let playerDmg = (this.props.player.hp - monster.monster_attacks[0].dmg)
    if (this.props.monster.hp > 0){
      this.props.decPlayerHp(playerDmg)
    }
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
          <MonsterFightCard
          visible={this.state.monsterVisible} name={this.props.monster.name} img={this.props.monster.img}/>
          <PlayerAttackMoves dmgMonster={this.dmgMonster} attack={this.props.player ? this.props.player.player_attacks.filter(attack => attack.id !==3) : null}/>
          <MonsterHPBar  hp={this.props.monster ? this.props.monster.hp : null}/>
          <PlayerFightCard visible={this.state.playerVisible}/>
          <PlayerHPBar hp={this.props.player ? this.props.player.hp : null}/>
          {this.props.player && this.props.player.hp === 0 ? <LoseScreenCont/> : null}
        </div>
      </div>
    )
  }
}


export default connect(null, { decMonsterHp, decPlayerHp })(FightBarCont)
