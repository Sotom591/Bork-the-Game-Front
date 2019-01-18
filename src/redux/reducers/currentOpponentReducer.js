

const currentOpponentReducer = (state = null, action) =>{
  switch(action.type){
    case "FIGHT_MON":
      return action.payload
    case "CLEAR":
      return null
    default:
      return state;
  }
}

export default currentOpponentReducer
