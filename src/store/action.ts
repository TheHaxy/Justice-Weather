import { ActionMapTypes, ASYNC_GET_WEATHER, GET_WEATHER } from "./actionTypes";

export function getWeather(payload: string): ActionMapTypes["GET_WEATHER"] {
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