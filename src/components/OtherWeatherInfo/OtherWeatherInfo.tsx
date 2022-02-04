import React from "react";

import InfoClasses from "./OtherWeatherInfo.module.scss";

interface OtherInfoType{
  name: string;
  image: string;
  value: any;
}

const OtherWeatherInfo = ({name, image, value,}: OtherInfoType): JSX.Element => (
  <div className={InfoClasses.info_block}>
    <img src={image} alt="temp" className={InfoClasses.info_block__image} />
    <div className={InfoClasses.info_block__info}>
      <p className={InfoClasses.info_block__info__value}>{value}</p>
      <p className={InfoClasses.info_block__info__name}>{name}</p>
    </div>
  </div>
);

export default OtherWeatherInfo;
