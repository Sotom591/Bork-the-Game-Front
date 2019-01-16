import { MOVE_MONSTER } from '../actions';


const monstMovementReducer = (state = {x: 88, y: 88}, action) => {
  switch (action.type) {
    case MOVE_MONSTER:
      return action.payload
    default:
      return state;
  }
}


export default monstMovementReducer
