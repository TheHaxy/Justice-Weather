import { put, takeEvery, call } from "redux-saga/effects"
import { getWeather } from "./action";
import { ActionType, ASYNC_GET_WEATHER } from "./actionTypes";

function* getWeatherWorker(action: ActionType): object {
  const weatherApi = () => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=faa2d26ca2b932070659a2194dcdd90c`)
  const data = yield call(weatherApi)
  // eslint-disable-next-line no-promise-executor-return
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(getWeather(json))
}

export function* submitWatcher() {
  yield takeEvery(ASYNC_GET_WEATHER, getWeatherWorker)
}

export {}
