// import { P_TAKE_DAMAGE } from '../actions';

const playerHpReducer = (state = 10, action) => {
  switch (action.type) {
    case P_TAKE_DAMAGE:
      return action.payload
      // return action.payload
    default:
      return state;
  }
}


export default playerHpReducer
