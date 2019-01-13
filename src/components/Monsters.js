import React, { Component } from 'react';
import { connect } from 'react-redux';
import monster1 from '../images/monster1.png';
import { MONSTER1_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../constants.js'
import { moveMonster1} from '../redux/actions';




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
//   const {x, y} = this.props.monster1.position;
//   switch(direction){
//     case 'WEST':
//     if (x !== 0){
//     this.props.dispatch(
//       moveMonster1({x: (x - MONSTER1_SIZE), y}
//     ))}
//       break;
//     case 'EAST':
//       if(x <= (MAP_WIDTH - MONSTER1_SIZE) ){
//       this.props.dispatch(
//         moveMonster1({x: (x + MONSTER1_SIZE), y}
//       ))}
//       break;
//     case 'NORTH':
//       if (y !== 0){
//       this.props.dispatch(
//         moveMonster1({x, y: (y - MONSTER1_SIZE)}
//       ))}
//       break;
//     case 'SOUTH':
//       if(y <= (MAP_HEIGHT - MONSTER1_SIZE)){
//       this.props.dispatch(
//         moveMonster1({x, y: (y + MONSTER1_SIZE)}
//       ))}
//       break;
//     default:
//       console.log("???")
//     }
// }

componentDidMount(){
  this.moveRandomizer()
}

moveRandomizer = () =>{
  setInterval(this.monsterLogic, 2000)
}

monsterLogic = () =>{
  const {x, y} = this.props.monster1.position;
  // if (x !== 0){
  //     this.props.dispatch(
  //       moveMonster1({x: (x - MONSTER1_SIZE), y}
  //     ))}

  if(x <= (MAP_WIDTH - MONSTER1_SIZE) ){
    return this.props.dispatch(
      moveMonster1({x: (x + MONSTER1_SIZE), y}
    ))}

  // if (y !== 0){
  //     this.props.dispatch(
  //       moveMonster1({x, y: (y - MONSTER1_SIZE)}
  //     ))}

  if(y <= (MAP_HEIGHT - MONSTER1_SIZE)){
      this.props.dispatch(
        moveMonster1({x, y: (y + MONSTER1_SIZE)}
      ))}
}

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
  console.log(state)
  return{
    monster1: state.monster1
  }
}

export default connect(mapStateToProps)(Monsters)
