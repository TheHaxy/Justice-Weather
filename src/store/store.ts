import createSagaMiddleware from "redux-saga"
import { applyMiddleware, combineReducers, createStore } from "redux";
import { all } from "redux-saga/effects"
import { weatherReducer } from "./weatherReducer";
import { getLocationWatcher, submitWatcher } from "./getWeatherSaga";

export default function* rootSaga() {
  yield all([submitWatcher(), getLocationWatcher()])
}

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({weatherReducer})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export type RootState = ReturnType<typeof rootReducer>;



sagaMiddleware.run(rootSaga)