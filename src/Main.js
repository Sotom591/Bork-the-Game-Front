import React, { Component } from 'react';
import './App.js';
import { connect } from 'react-redux';
import World from './containers/World';
import FightBarCont from './containers/FightBarCont';
import {fetchingPlayer, fetchingMonsters }  from './redux/actions.js';

class Main extends Component {

  componentDidMount(){
    this.props.dispatch(fetchingPlayer())
    this.props.dispatch(fetchingMonsters())

  }

  render() {
    return (
      <div className="Main">
        <World />
        {this.props.player.opponent ?
         <FightBarCont monster={this.props.monsters.data} player={this.props.player.data} />
        :null }
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    player: state.player,
    monsters: state.monsters,
  }
}

export default connect(mapStateToProps)(Main);
