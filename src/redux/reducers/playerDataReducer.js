
const playerDataReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCHED_PLAYER":
      return action.player
    default:
      return state;
  }
}

export default playerDataReducer
