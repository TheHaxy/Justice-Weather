export const GET_WEATHER = "GET_WEATHER"
export const ASYNC_GET_WEATHER = "ASYNC_GET_WEATHER"

export type ActionMapTypes = {
  [ASYNC_GET_WEATHER]: {
    type: typeof ASYNC_GET_WEATHER;
    payload: string;
  }
  [GET_WEATHER]: {
    type: typeof GET_WEATHER;
    payload: string;
  }
}

export type ActionType = ActionMapTypes[keyof ActionMapTypes]
