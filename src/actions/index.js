import { LOAD_CITIES, LOAD_NAMES, TOGGLE_NAME } from "./types";
import { cities, names } from '../data'

export const loadCities = () => {
    return {
      type: LOAD_CITIES,
      payload: cities
    }
}

export const loadNames = () => {
    return {
      type: LOAD_NAMES,
      payload: names
    }
}

export const toggleName = (name) => {
    return {
        type: TOGGLE_NAME,
        payload: name
    }
}



