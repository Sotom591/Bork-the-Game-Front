

//action types
export const MOVE_PLAYER = 'MOVE_PLAYER'
export const MOVE_NOODLES = 'MOVE_NOODLES'
export const FETCHED_MONSTERS = 'FETCHED_MONSTERS'
export const FETCHED_PLAYER = 'FETCHED_PLAYER'
export const FETCHING_MONSTERS = 'FETCHING_MONSTERS'
export const FETCHING_PLAYER = 'FETCHING_PLAYER'
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

export function moveNoodles(direction){
  return{
    type: MOVE_NOODLES,
    payload: direction
  }
}

// export function playerLocation(facing){
//   return{
//     type: PLAYER_LOCATION,
//     payload: facing
//   }
// }

export function fetchingMonsters(){
  return dispatch =>{
    return fetch('http://localhost:3001/monsters')
    .then(res => res.json())
    .then(monsters => dispatch(fetchedMonsters(monsters)))
  }
}

function fetchedMonsters(monsters){
  return{
    type: FETCHED_MONSTERS,
    monsters
  }
}

export function fetchingPlayer(){
  return dispatch =>{
    return fetch('http://localhost:3001/players')
    .then(res => res.json())
    .then(player => dispatch(fetchedPlayer(player)))
  }
}

function fetchedPlayer(player){
  return{
    type: FETCHED_PLAYER,
    player
  }
}
