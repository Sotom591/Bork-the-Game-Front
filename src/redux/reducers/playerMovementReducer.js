import { MOVE_PLAYER } from '../actions';

const playerMovementReducer = (state = {x: 0, y: 88}, action) => {
  switch (action.type) {
    case MOVE_PLAYER:
      return action.payload.direction // payload is new {x, y}
    default:
      return state;
  }
}


export default playerMovementReducer
















// const initialState = {
//   position: [0, 0]
// }
// const playerReducer = (state = initialState, action) => {
//   switch(action.type){
//     case 'DISPATCH_MOVE':
//       return {
//         ...action.payload
//       }
//     default:
//       return state
//   }
// }



//
// export default playerReducer
