import { LOAD_CITIES, LOAD_NAMES, TOGGLE_NAME } from "./types";
import { cities, names } from '../data'

export const loadCities = () => {
    return {
      type: LOAD_CITIES,
      payload: cities
    }
}

export const loadNames = () => {
    const data = names.map(n => {
      n.status = false
      return n
    })
    return {
      type: LOAD_NAMES,
      payload: data
    }
}

export const toggleName = (name) => {
    return {
        type: TOGGLE_NAME,
        payload: name
    }
}



