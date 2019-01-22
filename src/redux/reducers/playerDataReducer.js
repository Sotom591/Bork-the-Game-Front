
const playerDataReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCHED_PLAYER":
      return action.player
    case "DMG_PLAYER":
      return{
        ...state,
        hp: action.payload
      }
    case "HEAL_PLAYER":
      return{
        ...state,
        hp: state.hp + 2
      }
    default:
      return state;
  }
}

export default playerDataReducer
