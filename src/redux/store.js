import { createStore } from 'redux';
import rootReducer from './reducers/combineReducer.js'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// console.log(store.getState());
export default store;
