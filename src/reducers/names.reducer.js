import { LOAD_NAMES, TOGGLE_NAME } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_NAMES:
      return [...state, ...action.payload];

    case TOGGLE_NAME:
      const newState = state.map(n => {
        if(n.id === action.payload.id) {
          n.status = !n.status
        }
        return n
      })
      return newState
    default:
      return state;
  }
};
