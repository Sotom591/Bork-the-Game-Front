import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchingPlayer } from '../redux/actions';


class PlayerAttackMoves extends Component{

  componentDidMount(){
    this.props.dispatch(fetchingPlayer())
  }
  render(){
    return(
      <div className='playerMoves'>
        <button>bite</button>
        <button>lick</button>
        <button>bork</button>
        <button>tackle</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    player: state.player.data
  }
}

export default connect(mapStateToProps)(PlayerAttackMoves)
