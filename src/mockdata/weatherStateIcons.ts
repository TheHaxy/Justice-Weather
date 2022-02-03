// @ts-ignore
import sunIcon from "../assets/Sun.svg";
// @ts-ignore
import snowIcon from "../assets/Snow.svg"
// @ts-ignore
import rainIcon from "../assets/Rain.svg"
// @ts-ignore
import cloudsIcon from "../assets/Clouds.svg"

interface WeatherStateType {
  Clear?: string,
  Snow?: string,
  Rain?: string,
  Clouds?: string,
}

export const weatherStateIcons = {
  Clear: sunIcon,
  Snow: snowIcon,
  Rain: rainIcon,
  Clouds: cloudsIcon,
}