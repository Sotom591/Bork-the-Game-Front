import { combineReducers } from 'redux'
import movementReducer from './movementReducer'
import monstMovementReducer from './monstMovementReducer'
import spriteReducer from './spriteReducer'
import indexReducer from './indexReducer'

const rootReducer = combineReducers({
  player: combineReducers({
    position: movementReducer,
    spritepx: spriteReducer,
    indexWalk: indexReducer
  }),
  monster1: combineReducers({
    position: monstMovementReducer
  })
})

export default rootReducer

//player is our state
//state = {
  //player = {
  //position: {x, y}
// }
//}
