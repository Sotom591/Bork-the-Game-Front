

//action types
export const MOVE_PLAYER = 'MOVE_PLAYER'
export const MOVE_MONSTER1 = 'MOVE_MONSTER1'
// export const PLAYER_LOCATION = 'PLAYER_LOCATION'


//action creators
export function movePlayer(direction, spritepx, indexWalk){
  return {
    type: MOVE_PLAYER,
    payload: {
      direction, // direction === {x, y}
      spritepx,
      indexWalk
    }
  }
}

export function moveMonster1(direction){
  return{
    type: MOVE_MONSTER1,
    payload: direction
  }
}

// export function playerLocation(facing){
//   return{
//     type: PLAYER_LOCATION,
//     payload: facing
//   }
// }
