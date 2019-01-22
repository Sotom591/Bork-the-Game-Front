
const playerDataReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCHED_PLAYER":
      return action.player
    case "DMG_PLAYER":
      return{
        ...state,
        hp: action.payload
      }
    default:
      return state;
  }
}

export default playerDataReducer
