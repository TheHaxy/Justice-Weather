import React, { FormEvent, useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { asyncGetCurrLocation, asyncGetWeather } from "../../store/action";

import OtherWeatherInfo from "../OtherWeatherInfo/OtherWeatherInfo";
import { weatherStateIcons } from "../../mockdata/weatherStateIcons";
import { WeatherType } from "../../store/actionTypes";
// @ts-ignore
import MainPageClasses from "./MainPage.module.scss";
// @ts-ignore
import searchIcon from "../../assets/search.svg";
import { RootState } from "../../store/store";
// @ts-ignore
// @ts-ignore
import temperature from "../../assets/Temperature high.svg";
// @ts-ignore
import wind from "../../assets/Wind sun.svg";
// @ts-ignore
import raindbow from "../../assets/Rainbow.svg";
// @ts-ignore
import raindrops from "../../assets/Raindrops.svg";
// @ts-ignore
// eslint-disable-next-line no-unused-vars
import errorIcon from "../../assets/flame-searching.png";

const MainPage = () => {
  const weather: WeatherType = useSelector(
    (state: RootState) => state.weatherReducer
  );
  const [errorText, setErrorText] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      dispatch(asyncGetCurrLocation(position.coords))
    );
  }, []);

  const getWeather = (e: FormEvent) => {
    e.preventDefault();
    dispatch(asyncGetWeather((e.target as HTMLFormElement).city.value));
    (e.target as HTMLFormElement).city.value = "";
  };

  useMemo(() => {
    if (!weather.weather) setErrorText(true);
    else {
      setErrorText(false);
    }
  }, [weather]);

  const rerouteToOtherCity = () => {
    dispatch(asyncGetWeather("Moscow"));
  };

  return (
    <main className={MainPageClasses.main}>
      <form
        className={MainPageClasses.main__form}
        onSubmit={(e: FormEvent) => getWeather(e)}
      >
        <input
          type="text"
          name="city"
          placeholder="Search Your City"
          className={MainPageClasses.main__form__input}
        />
        <button type="submit" className={MainPageClasses.main__form__button}>
          <img src={searchIcon} alt="search" />
        </button>
      </form>
      {errorText && (
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
        {!errorText ? (
          <>
            <h2 className={MainPageClasses.main__info_section__city_name}>
              {weather.name}
            </h2>
            <div className={MainPageClasses.main__info_section__temp_section}>
              <img
                src={
                  weather.weather && weatherStateIcons[weather.weather[0].main]
                }
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
                  {weather.main && Math.round(weather.main.temp)}
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
                  {weather.weather && weather.weather[0].main}
                </p>
              </div>
            </div>
            <div
              className={MainPageClasses.main__info_section__other_weather_info}
            >
              <OtherWeatherInfo
                name="Wind"
                image={wind}
                value={`${weather.wind && weather.wind.speed} km/h`}
              />
              <OtherWeatherInfo
                name="Feels like"
                image={raindbow}
                value={`${weather.main && weather.main.feels_like}°C`}
              />
              <OtherWeatherInfo
                name="Pressure"
                image={temperature}
                value={`${weather.main && weather.main.pressure} mbar`}
              />
              <OtherWeatherInfo
                name="Humidity"
                image={raindrops}
                value={`${weather.main && weather.main.humidity}%`}
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
