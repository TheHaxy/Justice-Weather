import { ActionMapTypes, ASYNC_GET_WEATHER, GET_WEATHER, WeatherType } from "./actionTypes";

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