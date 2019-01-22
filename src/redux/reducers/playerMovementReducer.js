
const playerMovementReducer = (state = {x: 0, y: 88}, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return action.payload.direction
    default:
      return state;
  }
}


export default playerMovementReducer
