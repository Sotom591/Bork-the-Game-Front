

//action types
export const MOVE_PLAYER = 'MOVE_PLAYER'
export const MOVE_MONSTER1 = 'MOVE_MONSTER1'


//action creators
export function movePlayer(direction){
  return {
    type: MOVE_PLAYER,
    payload: direction // direction === {x, y}
  }
}

export function moveMonster1(direction){
  return{
    type: MOVE_MONSTER1,
    payload: direction
  }
}
