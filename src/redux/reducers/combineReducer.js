import { combineReducers } from 'redux'
import movementReducer from './movementReducer'
import monstMovementReducer from './monstMovementReducer'

const rootReducer = combineReducers({
  player: combineReducers({
    position: movementReducer
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
