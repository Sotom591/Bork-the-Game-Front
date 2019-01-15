import { FETCHED_MONSTERS } from '../actions';

const monsterDataReducer = (state = [], action) => {

  switch (action.type) {
    case FETCHED_MONSTERS:
      return action.monsters
    default:
      return state;
  }
}


export default monsterDataReducer
