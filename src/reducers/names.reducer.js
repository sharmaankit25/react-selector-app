import { LOAD_NAMES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_NAMES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
