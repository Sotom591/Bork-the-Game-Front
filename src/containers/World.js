import React, { Component } from 'react';
import Player from '../components/Player';
import Map from '../components/Map';
import Monsters from '../components/Monsters';
import { connect } from 'react-redux'
import { fetchingMonsters } from '../redux/actions.js'

class World extends Component{

componentDidMount(){
    this.props.dispatch(fetchingMonsters())
}

  render(){
    return(
      <div
        style={{
          position: 'relative',
          width: '880px',
          height: '440px',
          margin: '5px auto'
        }}
        >
        <Map />
        <Player />

        { this.props.monsters.data.map(monster => <Monsters key={monster.id} monster={monster}/>)}

      </div>
      )
    }
  }

const mapStateToProps = (state) =>{
  return {
    monsters: state.monsters
  }
}

export default connect(mapStateToProps)(World)
