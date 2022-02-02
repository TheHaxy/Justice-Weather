import { ActionType, GET_WEATHER } from "./actionTypes";

const defaultState = "acd"

// eslint-disable-next-line default-param-last
export const weatherReducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case "GET_WEATHER":
      console.log('=======>action.payload', action.payload)
      return action.payload

    default:
      return state
  }
}