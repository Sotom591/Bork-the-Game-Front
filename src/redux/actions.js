//store and actions
import { createStore, combineReducer } from 'redux'
import playerReducer from './reducers/'






const rootReducer = combineReducer({
  player: playerReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
