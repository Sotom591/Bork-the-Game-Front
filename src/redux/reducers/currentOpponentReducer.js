

const currentOpponentReducer = (state = null, action) =>{
  switch(action.type){
    case "FIGHT_MON":
      return action.payload
    default:
      return state;
  }
}

export default currentOpponentReducer
