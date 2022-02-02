import createSagaMiddleware from "redux-saga"
import { applyMiddleware, combineReducers, createStore } from "redux";
import { weatherReducer } from "./weatherReducer";
import { submitWatcher } from "./getWeatherSaga";

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({weatherReducer})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(submitWatcher)