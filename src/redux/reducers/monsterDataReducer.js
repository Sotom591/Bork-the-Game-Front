
const monsterDataReducer = (state = [], action) => {

  switch (action.type) {
    case "DMG_TO_MON":
      return state.map(monster => {
        if (monster.id === action.monsterId){
          return{
            ...monster,
            hp: action.payload.hp
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


export default monsterDataReducer
