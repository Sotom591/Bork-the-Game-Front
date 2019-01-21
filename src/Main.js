import React, { Component } from 'react';
import './App.js';
import { connect } from 'react-redux';
import World from './containers/World';
import FightBarCont from './containers/FightBarCont';
import WinCont from './containers/WinCont'
import {fetchingPlayer}  from './redux/actions.js';

class Main extends Component {



  componentDidMount(){
    this.props.dispatch(fetchingPlayer())
  }

  render() {
    return (
      <div className="Main">
        <World />
        {this.props.player.opponent ?
         <FightBarCont monster={this.props.player.opponent} player={this.props.player.data} />
        :null }
        {this.props.player.kills.count === 3 ? <WinCont/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    player: state.player
  }
}

export default connect(mapStateToProps)(Main);
