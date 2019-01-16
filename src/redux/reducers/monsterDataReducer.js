
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
    case "FETCHED_MONSTERS":
      return action.monsters
    // case "MOVE_MONSTER":
    //   return action.payload
    default:
      return state;


  }
}


export default monsterDataReducer
