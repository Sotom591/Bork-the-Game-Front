import React, { Component } from 'react';
import { connect } from 'react-redux';
import noodles from '../images/angrynoodlest.png';
import { NOODLES_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../constants.js'
import { moveNoodles} from '../redux/actions';




// import pupperWalk from '../tiles/pupperWalk.png';
// import { movePlayer } from '../redux/actions';


class Monsters extends Component {


componentDidMount(){
  this.startMonsters()
}

startMonsters = () =>{
  setInterval(this.monsterLogic, 2000)
}

monsterLogic = () =>{
  const {x, y} = this.props.noodles.position;
  // console.log(this.props.player.x)
  // console.log(this.props.player.y)
  if(x < this.props.player.position.x){
    this.props.dispatch(
      moveNoodles({x: (x + NOODLES_SIZE), y}
    ))
  }
  if(x > this.props.player.position.x){
    this.props.dispatch(
      moveNoodles({x: (x - NOODLES_SIZE), y}
    ))
  }
  //
  // if(x <= (MAP_WIDTH - NOODLES_SIZE) ){
  //   return this.props.dispatch(
  //     moveNoodles({x: (x + NOODLES_SIZE), y}
  //   ))}
  if(y < this.props.player.position.y){
    this.props.dispatch(
      moveNoodles({x, y: (y + NOODLES_SIZE)}
    ))
  }

  if(y > this.props.player.position.y){
    this.props.dispatch(
      moveNoodles({x, y: (y - NOODLES_SIZE)}
    ))
  }

}


//   if(y <= (MAP_HEIGHT - NOODLES_SIZE)){
//       this.props.dispatch(
//         moveNoodles({x, y: (y + NOODLES_SIZE)}
//       ))}
// }

render(){
  console.log(this.props)
  return(
    <div
    style={{
      position: 'absolute',
      top: this.props.noodles.position.y,
      left: this.props.noodles.position.x,
      backgroundImage: `url(${noodles})`,
      backgroundPosition: '0 0',
      width: '46px',
      height: '48px'
    }}
    />
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return{
    noodles: state.noodles,
    player: state.player
  }
}

export default connect(mapStateToProps)(Monsters)
