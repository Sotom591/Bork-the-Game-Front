

//action types
export const MOVE_PLAYER = 'MOVE_PLAYER'


//action creators
export function movePlayer(direction){
  return {
    type: MOVE_PLAYER,
    payload: direction // direction === {x, y}
  }
}
