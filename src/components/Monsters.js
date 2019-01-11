import React, { Component } from 'react';
import { connect } from 'react-redux';
import monster1 from '../images/monster1.png';


// import pupperWalk from '../tiles/pupperWalk.png';
// import { movePlayer } from '../redux/actions';


class Monsters extends Component {

render(){
  console.log(this.props)
  return(
    <div
    style={{
      position: 'absolute',
      top: this.props.monster1.position.y,
      left: this.props.monster1.position.x,
      backgroundImage: `url(${monster1})`,
      backgroundPosition: '0 0',
      width: '36px',
      height: '60px'
    }}
    />
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    monster1: state.monster1
  }
}

export default connect(mapStateToProps)(Monsters)
