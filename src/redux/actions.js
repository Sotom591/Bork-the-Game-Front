//store and actions
import { createStore, combineReducers } from 'redux'
import playerReducer from './reducers/playerReducer'






const rootReducer = combineReducers({
  player: playerReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
