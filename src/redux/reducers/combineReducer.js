import { combineReducers } from 'redux';
import movementReducer from './movementReducer';
import monstMovementReducer from './monstMovementReducer';
import spriteReducer from './spriteReducer';
import monsterDataReducer from './monsterDataReducer';
import playerDataReducer from './playerDataReducer';
// import indexReducer from './indexReducer'

const rootReducer = combineReducers({
  player: combineReducers({
    position: movementReducer,
    spritepx: spriteReducer,
    data: playerDataReducer,
  }),
  noodles: combineReducers({
    position: monstMovementReducer,
  }),
  monsters: combineReducers({
    data: monsterDataReducer,
  })
})

export default rootReducer


// const rootReducer = combineReducers({
//   player: combineReducers({
//     position: movementReducer,
//     spritepx: spriteReducer,
//     data: playerDataReducer
//   }),
//   noodles: combineReducers({
//     position: monstMovementReducer
//   }),
//   monsters: combineReducers({
//     data: monsterDataReducer
//   )}
// })
