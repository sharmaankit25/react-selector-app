import { LOAD_CITIES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_CITIES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
