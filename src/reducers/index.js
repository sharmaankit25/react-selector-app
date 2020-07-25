import { combineReducers } from "redux";
import cities from './cities.reducer'


const appReducer = combineReducers({
  cities
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
