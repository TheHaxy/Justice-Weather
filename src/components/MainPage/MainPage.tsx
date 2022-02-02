import React, { FormEvent } from "react";

import { useDispatch, useSelector } from "react-redux";
import { asyncGetWeather } from "../../store/action";

import OtherWeatherInfo from "../OtherWeatherInfo/OtherWeatherInfo";

// @ts-ignore
import MainPageClasses from "./MainPage.module.scss";
// @ts-ignore
import searchIcon from "../../assets/search.svg";
import { RootState } from "../../store/store";
// @ts-ignore
import sunIcon from "../../assets/Sun.svg";
// @ts-ignore
import temperature from "../../assets/Temperature high.svg";
// @ts-ignore
import wind from "../../assets/Wind sun.svg";
// @ts-ignore
import raindbow from "../../assets/Rainbow.svg";
// @ts-ignore
import raindrops from "../../assets/Raindrops.svg";

const MainPage = () => {
  const weather = useSelector((state: RootState) => state.weatherReducer);
  const dispatch = useDispatch();
  const getWeather = (e: any) => {
    e.preventDefault();
    dispatch(asyncGetWeather(e.target.elements.city.value));
    console.log("=======>weather", weather);
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
      <section className={MainPageClasses.main__info_section}>
        <h2 className={MainPageClasses.main__info_section__city_name}>
          {weather.name}
        </h2>
        <div className={MainPageClasses.main__info_section__temp_section}>
          <img
            src={sunIcon}
            alt="weather icon"
            className={MainPageClasses.main__info_section__temp_section__image}
          />
          <div
            className={MainPageClasses.main__info_section__temp_section__info}
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
        <div className={MainPageClasses.main__info_section__other_weather_info}>
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
      </section>
    </main>
  );
};

export default MainPage;
