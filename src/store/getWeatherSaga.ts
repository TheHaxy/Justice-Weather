import { put, takeEvery, call } from "redux-saga/effects"
import { getWeather, getWeatherError } from "./action";
import { ActionType, ASYNC_GET_WEATHER, ASYNC_GET_LOCATION } from "./actionTypes";

function* getNewWeatherWorker(action: ActionType): object {
  const weatherApi = () => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&units=metric&appid=131f1f9a4aa091b66864e96459b78949`)
  const data = yield call(weatherApi)
  const json = yield call(() => new Promise(res => res(data.json())))
  try {
    yield put(getWeather(json))
  } catch {
    yield put(getWeatherError({}))
  }
}

function* getCurrWeatherWorker(action: any): object {
  const weatherApi = () => fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${action.payload.latitude}&lon=${action.payload.longitude}&units=metric&&appid=131f1f9a4aa091b66864e96459b78949`)
  const data = yield call(weatherApi)
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(getWeather(json))
}

export function* submitWatcher() {
  yield takeEvery(ASYNC_GET_WEATHER, getNewWeatherWorker)
}

export function* getLocationWatcher() {
  yield takeEvery(ASYNC_GET_LOCATION, getCurrWeatherWorker)
}
