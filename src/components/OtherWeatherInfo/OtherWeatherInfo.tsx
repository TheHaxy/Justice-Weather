import React from "react";

// @ts-ignore
import InfoClasses from "./OtherWeatherInfo.module.scss";

const OtherWeatherInfo = ({
  name,
  image,
  value,
}: {
  name: string;
  image: string;
  value: any;
}) => (
  <div className={InfoClasses.info_block}>
    <img src={image} alt="temp" className={InfoClasses.info_block__image} />
    <div className={InfoClasses.info_block__info}>
      <p className={InfoClasses.info_block__info__value}>{value}</p>
      <p className={InfoClasses.info_block__info__name}>{name}</p>
    </div>
  </div>
);

export default OtherWeatherInfo;
