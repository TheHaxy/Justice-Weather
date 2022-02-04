import React, { FormEvent, useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { asyncGetCurrLocation, asyncGetWeather } from "../../store/action";

import OtherWeatherInfo from "../OtherWeatherInfo/OtherWeatherInfo";
import { weatherStateIcons } from "../../mockdata/weatherStateIcons";
import { WeatherType } from "../../store/actionTypes";
import { RootState } from "../../store/store";

import MainPageClasses from "./MainPage.module.scss";
import searchIcon from "../../assets/search.svg";
import temperature from "../../assets/Temperature high.svg";
import wind from "../../assets/Wind sun.svg";
import rainbow from "../../assets/Rainbow.svg";
import raindrops from "../../assets/Raindrops.svg";
import errorIcon from "../../assets/flame-searching.png";

const MainPage = () => {
  const weather: WeatherType = useSelector(
      (state: RootState) => state.weatherReducer);
  const [isShowErrorText, setIsShowErrorText] = useState(false);
  const dispatch = useDispatch();

  const currentTemp = useMemo(() => weather.main && Math.round(weather.main.temp), [weather])
  const weatherImage = useMemo(() => weather.weather && weatherStateIcons[weather.weather[0].main], [weather])
  const metcast = useMemo(() => weather.weather && weather.weather[0].main, [weather])

  const otherInfo = useMemo(() => ({
    windSpeed: weather.wind && weather.wind.speed,
    feelsLike: weather.main && weather.main.feels_like,
    pressure: weather.main && weather.main.pressure,
    humidity: weather.main && weather.main.humidity

  }), [weather])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
        dispatch(asyncGetCurrLocation(position.coords))
    );
  }, []);

  useEffect(() => {
    if (!weather.weather) setIsShowErrorText(true);
    else {
      setIsShowErrorText(false);
    }
  }, [weather]);

  const getWeather = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(asyncGetWeather(e.currentTarget.city.value));
    e.currentTarget.city.value = "";
  };

  const rerouteToOtherCity = () => {
    dispatch(asyncGetWeather("Moscow"));
  };

  return (
      <main className={MainPageClasses.main}>
        <form
            className={MainPageClasses.main__form}
            onSubmit={(e: FormEvent<HTMLFormElement>) => getWeather(e)}
        >
          <input
              type="text"
              name="city"
              placeholder="Search Your City"
              className={MainPageClasses.main__form__input}
          />
          <button type="submit" className={MainPageClasses.main__form__button}>
            <img src={searchIcon} alt="search"/>
          </button>
        </form>
        {isShowErrorText && (
            <div className={MainPageClasses.main__error}>
              <p className={MainPageClasses.main__error__text}>
                This city does not exist, perhaps you meant{" "}
                <span
                    className={MainPageClasses.main__error__span}
                    onClick={rerouteToOtherCity}
                >
              Moscow
            </span>
                ?
              </p>
            </div>
        )}
        <section className={MainPageClasses.main__info_section}>
          {!isShowErrorText ? (
              <>
                <h2 className={MainPageClasses.main__info_section__city_name}>
                  {weather.name}
                </h2>
                <div className={MainPageClasses.main__info_section__temp_section}>
                  <img
                      src={weatherImage}
                      alt="weather icon"
                      className={
                        MainPageClasses.main__info_section__temp_section__image
                      }
                  />
                  <div
                      className={
                        MainPageClasses.main__info_section__temp_section__info
                      }
                  >
                    <p
                        className={
                          MainPageClasses.main__info_section__temp_section__info__temp
                        }
                    >
                      {currentTemp}
                      <span
                          className={
                            MainPageClasses.main__info_section__temp_section__info__temp__span
                          }
                      >
                    °
                  </span>
                    </p>
                    <p
                        className={
                          MainPageClasses.main__info_section__temp_section__info__weather
                        }
                    >
                      {metcast}
                    </p>
                  </div>
                </div>
                <div
                    className={MainPageClasses.main__info_section__other_weather_info}
                >
                  <OtherWeatherInfo
                      name="Wind"
                      image={wind}
                      value={`${otherInfo.windSpeed} km/h`}
                  />
                  <OtherWeatherInfo
                      name="Feels like"
                      image={rainbow}
                      value={`${otherInfo.feelsLike}°C`}
                  />
                  <OtherWeatherInfo
                      name="Pressure"
                      image={temperature}
                      value={`${otherInfo.pressure} mbar`}
                  />
                  <OtherWeatherInfo
                      name="Humidity"
                      image={raindrops}
                      value={`${otherInfo.humidity}%`}
                  />
                </div>
              </>
          ) : (
              <img
                  src={errorIcon}
                  alt="Error 404"
                  className={MainPageClasses.main__error_img}
              />
          )}
        </section>
      </main>
  );
};

export default MainPage;
