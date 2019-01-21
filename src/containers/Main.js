import React, { Component } from 'react';
import { connect } from 'react-redux';
import World from './World';
import FightBarCont from './FightBarCont';
import WinScreenCont from './WinScreenCont'
import LoseScreenCont from './LoseScreenCont'
import { fetchingPlayer }  from '../redux/actions';

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
        {this.props.player.kills.count === 3 ? <WinScreenCont/> : null}
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
