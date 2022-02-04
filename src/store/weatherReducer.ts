import { ActionType, WeatherType } from "./actionTypes";

const defaultState = {}

export const weatherReducer = (state = defaultState, action: ActionType): WeatherType => {
  switch (action.type) {
    case "GET_WEATHER":
      return action.payload

    case "GET_WEATHER_ERROR":
      return action.payload

    default:
      return state
  }
}