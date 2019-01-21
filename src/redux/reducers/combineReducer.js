import { combineReducers } from 'redux';
import playerMovementReducer from './playerMovementReducer';
import playerSpriteReducer from './playerSpriteReducer';
import monsterDataReducer from './monsterDataReducer';
import playerDataReducer from './playerDataReducer';
import currentOpponentReducer from './currentOpponentReducer'
import deathTrackerReducer from './deathTrackerReducer'

const rootReducer = combineReducers({
  player: combineReducers({
    position: playerMovementReducer,
    spritepx: playerSpriteReducer,
    data: playerDataReducer,
    opponent: currentOpponentReducer,
    kills: deathTrackerReducer
  }),
  monsters: combineReducers({
    data: monsterDataReducer,
  })
})

export default rootReducer
