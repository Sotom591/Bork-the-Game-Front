
const monsterDataReducer = (state = [], action) => {
  switch (action.type) {
    case "DMG_TO_MON":
      return state.map(monster => {
        if (monster.id === action.monsterId){
          return{
            ...monster,
            hp: monster.hp - action.payload
          }
        } else {
          return monster
        }
      })
    case "MOVE_MONSTER":
      return state.map(monster => {
        if(monster.id === action.monsterId){
          return{
            ...monster,
            x: action.payload.x,
            y: action.payload.y
          }
        } else {
          return monster
        }
      })
    case "FETCHED_MONSTERS":
      return action.monsters
    default:
      return state;
  }
}

// return {
//           ...painting,
//           title: action.payload.title,
//           artist: {
//             ...painting.artist,
//             name: action.payload.name,
//             birthday: action.payload.birthday,
//             deathday: action.payload.deathday
//           }
//         };




export default monsterDataReducer
