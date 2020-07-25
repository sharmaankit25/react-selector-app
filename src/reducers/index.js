import { combineReducers } from "redux";
import cities from './cities.reducer'
import names from './names.reducer'


const appReducer = combineReducers({
  cities,
  names
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
