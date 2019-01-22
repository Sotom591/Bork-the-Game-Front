
//action types
export const MOVE_PLAYER = 'MOVE_PLAYER'
export const MOVE_MONSTER = 'MOVE_MONSTER'
export const FETCHED_MONSTERS = 'FETCHED_MONSTERS'
export const FETCHED_PLAYER = 'FETCHED_PLAYER'
export const FETCHING_MONSTERS = 'FETCHING_MONSTERS'
export const FETCHING_PLAYER = 'FETCHING_PLAYER'
export const DMG_MONSTER = 'DMG_MONSTER'
export const FIGHT_MONSTER = 'FIGHT_MONSTER'
export const KILL_MONSTER = 'KILL_MONSTER'
export const TRACK_DEATHS = 'TRACK_DEATHS'
export const DMG_PLAYER = 'DMG_PLAYER'
export const HEAL_PLAYER = 'HEAL_PLAYER'


//action creators
export function movePlayer(direction, spritepx, indexWalk){
  return {
    type: MOVE_PLAYER,
    payload: {
      direction,
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

export function setOpponent(monster){
  return{
    type: FIGHT_MONSTER,
    payload: monster
  }
}


export function decMonsterHp(monsterId, dmg){
  return {
    type: DMG_MONSTER,
    monsterId,
    payload: dmg
  }
}

export function decPlayerHp(dmg){
  return{
    type: DMG_PLAYER,
    payload: dmg
  }
}

export function incPlayerHp(){
  return{
    type: HEAL_PLAYER
  }
}


export function killMonster(newMonsters){
  return {
    type: KILL_MONSTER,
    newMonsters
  }
}

export function trackDeaths(){
  return {
    type: TRACK_DEATHS
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

// export function moveMonsterX(monsterId, x){
//
//   return{
//     type: MOVE_MONSTERX,
//     monsterId,
//     payload: x
//   }
// }
//
// export function moveMonsterY(monsterId, y){
//
//   return{
//     type: MOVE_MONSTERY,
//     monsterId,
//     payload: y
//   }
// }
