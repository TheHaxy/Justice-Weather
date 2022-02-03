import { ActionType, GET_WEATHER, WeatherType } from "./actionTypes";

const defaultState = {}

// eslint-disable-next-line default-param-last
export const weatherReducer = (state = defaultState, action: ActionType): WeatherType => {
  switch (action.type) {
    case "GET_WEATHER":
      console.log('=======>action.payload', action.payload)
      return action.payload

    case "GET_WEATHER_ERROR":
      console.log('=======>action.payload', action.payload)
      return action.payload

    default:
      return state
  }
}