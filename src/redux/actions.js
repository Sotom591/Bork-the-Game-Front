

//action types
export const MOVE_PLAYER = 'MOVE_PLAYER'
export const MOVE_MONSTER = 'MOVE_MONSTER'
export const FETCHED_MONSTERS = 'FETCHED_MONSTERS'
export const FETCHED_PLAYER = 'FETCHED_PLAYER'
export const FETCHING_MONSTERS = 'FETCHING_MONSTERS'
export const FETCHING_PLAYER = 'FETCHING_PLAYER'
export const DMG_TO_MON = 'DMG_TO_MON'
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



export function moveMonster(monsterId, {x, y}){

  return{
    type: MOVE_MONSTER,
    monsterId,
    payload: {x, y}
  }
}


// export function moveMonster(direction){
//
//   return{
//     type: MOVE_MONSTER,
//     payload: direction
//   }
// }


export function decMonsterHp(monsterId, dmg){
  return {
    type: DMG_TO_MON,
    monsterId,
    payload: dmg
  }
}


// export function playerLocation(facing){
//   return{
//     type: PLAYER_LOCATION,
//     payload: facing
//   }
// }

export function fetchingMonsters(){
  return (dispatch) =>{
    fetch('http://localhost:3001/monsters')
    .then(res => res.json())
    .then(monsters => {
      dispatch(fetchedMonsters(monsters))
    })
  }
}

function fetchedMonsters(monsters){
  return{
    type: FETCHED_MONSTERS,
    monsters
  }
}

export function fetchingPlayer(){
  return (dispatch) =>{
    fetch('http://localhost:3001/players/1')
    .then(res => res.json())
    .then(player => {
      dispatch(fetchedPlayer(player))
    })
  }
}

function fetchedPlayer(player){
  return{
    type: FETCHED_PLAYER,
    player
  }
}
