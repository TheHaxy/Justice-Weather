import createSagaMiddleware from "redux-saga"
import { applyMiddleware, createStore } from "redux";
import { weatherReducer } from "./weatherReducer";
import { submitWatcher } from "./getWeatherSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(weatherReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(submitWatcher)