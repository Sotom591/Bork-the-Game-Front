import { MOVE_PLAYER } from '../actions';

const spriteReducer = (state = {a: 0, b: 0}, action) => {
  console.log(state)
  switch (action.type) {
    case MOVE_PLAYER:
      return action.payload.spritepx
      // return action.payload
    default:
      return state;
  }
}


export default spriteReducer