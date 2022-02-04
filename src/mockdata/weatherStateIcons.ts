import sunIcon from "../assets/Sun.svg";
import snowIcon from "../assets/Snow.svg";
import rainIcon from "../assets/Rain.svg";
import cloudsIcon from "../assets/Clouds.svg";

interface WeatherStateType {
  [key: string]: string;
}

export const weatherStateIcons: WeatherStateType = {
  Clear: sunIcon,
  Snow: snowIcon,
  Rain: rainIcon,
  Clouds: cloudsIcon,
};
