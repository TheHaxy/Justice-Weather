export const GET_WEATHER = "GET_WEATHER";
export const ASYNC_GET_WEATHER = "ASYNC_GET_WEATHER";

export interface WeatherType {
  base?: string;
  clouds?: object;
  cod?: number;
  coord?: object;
  dt?: number;
  id?: number;
  main?: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name?: string;
  sys?: object;
  timezone?: number;
  visibility?: number;
  weather?: [{ main: string }];
  wind?: { speed: string };
}

export type ActionMapTypes = {
  [ASYNC_GET_WEATHER]: {
    type: typeof ASYNC_GET_WEATHER;
    payload: string;
  };
  [GET_WEATHER]: {
    type: typeof GET_WEATHER;
    payload: WeatherType;
  };
};

export type ActionType = ActionMapTypes[keyof ActionMapTypes];
