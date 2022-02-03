import { put, takeEvery, call } from "redux-saga/effects"
import { getWeather, getWeatherError } from "./action";
import { ActionType, ASYNC_GET_WEATHER, ASYNC_GET_LOCATION } from "./actionTypes";

function* getNewWeatherWorker(action: ActionType): object {
  let weatherApi = () => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&units=metric&appid=131f1f9a4aa091b66864e96459b78949`)
  let data = yield call(weatherApi)
  // eslint-disable-next-line no-promise-executor-return
  let json = yield call(() => new Promise(res => res(data.json())))
  if (json.cod === "404") {
    weatherApi = () => fetch(`https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=131f1f9a4aa091b66864e96459b78949`)
    data = yield call(weatherApi)
    // eslint-disable-next-line no-promise-executor-return
    json = yield call(() => new Promise(res => res(data.json())))
    yield put(getWeatherError({}))
  } else {
    yield put(getWeather(json))
  }
}

function* getCurrWeatherWorker(action: any): object {
  const weatherApi = () => fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${action.payload.latitude}&lon=${action.payload.longitude}&units=metric&&appid=131f1f9a4aa091b66864e96459b78949`)
  const data = yield call(weatherApi)
  // eslint-disable-next-line no-promise-executor-return
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(getWeather(json))
}

export function* submitWatcher() {
  yield takeEvery(ASYNC_GET_WEATHER, getNewWeatherWorker)
}

export function* getLocationWatcher() {
  yield takeEvery(ASYNC_GET_LOCATION, getCurrWeatherWorker)
}
