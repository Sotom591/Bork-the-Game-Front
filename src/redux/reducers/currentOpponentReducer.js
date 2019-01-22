
const currentOpponentReducer = (state = null, action) =>{
  switch(action.type){
    case "FIGHT_MONSTER":
      return action.payload
    case "CLEAR":
      return null
    default:
      return state;
  }
}

export default currentOpponentReducer
