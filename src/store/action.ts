import {
  ActionMapTypes,
  ASYNC_GET_WEATHER,
  ASYNC_GET_LOCATION,
  GET_WEATHER,
  PositionCoordType,
  WeatherType
} from "./actionTypes";

export function getWeather(payload: WeatherType): ActionMapTypes["GET_WEATHER"] {
   return {
     type: GET_WEATHER,
     payload,
   }
}

export function asyncGetWeather(payload: string): ActionMapTypes["ASYNC_GET_WEATHER"] {
  return {
    type: ASYNC_GET_WEATHER,
    payload,
  }
}

export function asyncGetCurrLocation(payload: PositionCoordType): ActionMapTypes["ASYNC_GET_LOCATION"] {
  return {
    type: ASYNC_GET_LOCATION,
    payload,
  }
}