import { combineReducers } from 'redux'
import movementReducer from './movementReducer'

const rootReducer = combineReducers({
  player: combineReducers({
    position: movementReducer
  })
})

export default rootReducer

//player is our state
//state = {
  //player = {
  //position: {x, y}
// }
//}
