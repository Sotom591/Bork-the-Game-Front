
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
          return {
            ...monster,
            x: action.payload.x,
            y: action.payload.y
          }
        } else {
          return monster
        }
      })
    // case "FIGHTING_MONSTER":
    //   return state.find(monster =>{
    //     if(monster.id === action.monsterId){
    //       return {
    //         monster
    //       }
    //     }
    //   })
    case "FETCHED_MONSTERS":
      return action.monsters
    default:
      return state;
  }
}

//if i need a capMonstArray that both monster comp and fightbar needs to know about, should prob live in store.
//can I make the reducers sep from monster data? idts



export default monsterDataReducer
