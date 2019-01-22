
const playerSpriteReducer = (state = {a: 0, b: 0}, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return action.payload.spritepx
    default:
      return state;
  }
}


export default playerSpriteReducer
