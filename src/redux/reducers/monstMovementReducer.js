import { MOVE_NOODLES } from '../actions';


 // {x: 0, y: 0}
const monstMovementReducer = (state = {x: 0, y: 0}, action) => {
  switch (action.type) {
    case MOVE_NOODLES:
      console.log(action.payload)
      return action.payload // payload is new {x, y}
    default:
      return state;
  }
}


export default monstMovementReducer
