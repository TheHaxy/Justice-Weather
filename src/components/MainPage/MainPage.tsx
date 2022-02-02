import React, { FormEvent } from 'react';

// @ts-ignore
import MainPageClasses from "./MainPage.module.scss"
// @ts-ignore
import searchIcon from "../../assets/search.svg"

const MainPage = () => {
  const getWeather = (e: any) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    console.log('=======>city', city)
  }
  return(
    <main className={MainPageClasses.main}>
      <form className={MainPageClasses.main__form} onSubmit={(e: FormEvent) => getWeather(e)}>
        <input type="text" name="city" placeholder="Search Your City" className={MainPageClasses.main__form__input} />
        <button type="submit"  className={MainPageClasses.main__form__button}><img src={searchIcon} alt="search"/></button>
      </form>
      <section className={MainPageClasses.main__info_section}>
        <p>Weather Info</p>
      </section>
    </main>
)};

export default MainPage;