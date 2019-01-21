
const deathTrackerReducer = (state = {count: 0}, action) =>{
  switch(action.type){
    case "TRACK_DEATHS":
      return {
        count: state.count + 1
      }
    default:
      return state;
  }
}

export default deathTrackerReducer
