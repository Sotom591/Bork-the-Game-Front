import React, { Component } from 'react';
import { connect } from 'react-redux';
import noodles from '../images/angrynoodlest.png';
import { NOODLES_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../constants.js'
import { moveNoodles} from '../redux/actions';




// import pupperWalk from '../tiles/pupperWalk.png';
// import { movePlayer } from '../redux/actions';


class Monsters extends Component {

//   moveRandomizer = () => {
//     setInterval()
//
//     switch(){
//
//       case '1':
//         return this.moveMonster('WEST')
//       case '2':
//         return this.moveMonster('EAST')
//       case '3':
//         return this.moveMonster('NORTH')
//       case '4':
//         return this.moveMonster('SOUTH')
//       default:
//         console.log("rwar")
//     }
//   }
// const moveMonster = (direction) =>{
//   const {x, y} = this.props.noodles.position;
//   switch(direction){
//     case 'WEST':
//     if (x !== 0){
//     this.props.dispatch(
//       moveNoodles({x: (x - NOODLES_SIZE), y}
//     ))}
//       break;
//     case 'EAST':
//       if(x <= (MAP_WIDTH - NOODLES_SIZE) ){
//       this.props.dispatch(
//         moveNoodles({x: (x + NOODLES_SIZE), y}
//       ))}
//       break;
//     case 'NORTH':
//       if (y !== 0){
//       this.props.dispatch(
//         moveNoodles({x, y: (y - NOODLES_SIZE)}
//       ))}
//       break;
//     case 'SOUTH':
//       if(y <= (MAP_HEIGHT - NOODLES_SIZE)){
//       this.props.dispatch(
//         moveNoodles({x, y: (y + NOODLES_SIZE)}
//       ))}
//       break;
//     default:
//       console.log("???")
//     }
// }

componentDidMount(){
  this.startMonsters()
}

startMonsters = () =>{
  setInterval(this.monsterLogic, 2000)
}

monsterLogic = () =>{
  const {x, y} = this.props.noodles.position;
  // if (x !== 0){
  //     this.props.dispatch(
  //       moveNoodles({x: (x - NOODLES_SIZE), y}
  //     ))}

  if(x <= (MAP_WIDTH - NOODLES_SIZE) ){
    return this.props.dispatch(
      moveNoodles({x: (x + NOODLES_SIZE), y}
    ))}

  // if (y !== 0){
  //     this.props.dispatch(
  //       moveNoodles({x, y: (y - NOODLES_SIZE)}
  //     ))}

  if(y <= (MAP_HEIGHT - NOODLES_SIZE)){
      this.props.dispatch(
        moveNoodles({x, y: (y + NOODLES_SIZE)}
      ))}
}

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
    noodles: state.noodles
  }
}

export default connect(mapStateToProps)(Monsters)
