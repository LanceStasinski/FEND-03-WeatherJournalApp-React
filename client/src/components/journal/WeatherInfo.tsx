import React, { useContext } from "react";
import styled from "styled-components";

import {
  WeatherWrapper,
  Header,
  WeatherUI,
  WeatherSection,
  WeatherIcon,
  Subject,
  Info,
  WeatherH3
} from "../../styles/styles";
import windIcon from "../../assets/windIcon.png";
import { AuthContext } from "../shared/context/auth-context";

const WeatherHeader = styled(Header)`
  justify-content: center;
`;

const Location = styled(Subject)`
  color: #444;
  text-align: center;
`;

const SkyWeatherSection = styled(WeatherSection)`
  padding-left: 0.5rem;
`

const WindImage = styled(WeatherIcon)`
  width: 50px;
  height: 50px;
  margin: 2rem 1rem 2.75rem 1rem;
`;

interface Props {
  weather: {
    description: string;
    icon: string;
    temp: number;
    wind: {
      speed: number;
      deg: number;
    };
  };
  location: string;
}

const WeatherInfo: React.FC<Props> = (props) => {
  const authCtx = useContext(AuthContext);

  const convertTemp = (tempK: number) => {
    if (authCtx.unitPreference === "imperial") {
      const tempF = Math.floor(((tempK - 273.15) * 9) / 5 + 32);
      return `${tempF} °F`;
    } else if (authCtx.unitPreference === "metric") {
      const tempC = Math.floor(tempK - 273.15);
      return `${tempC} °C`;
    } else {
      return `${tempK} K`;
    }
  };

  const convertWind = (speed: number) => {
    if (authCtx.unitPreference === "imperial") {
      const mph = Math.floor(speed * 2.237);
      return `${mph} mph`;
    } else {
      return `${speed} m/s`;
    }
  };

  return (
    <WeatherWrapper>
      <WeatherHeader>
        <Location>{props.location}</Location>
      </WeatherHeader>
      <WeatherUI>
        <SkyWeatherSection>
          <WeatherH3>Weather</WeatherH3>
          <WeatherIcon
            src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}
            alt={props.weather.description}
          />
          <Info>{convertTemp(props.weather.temp)}</Info>
        </SkyWeatherSection>
        <WeatherSection>
          <WeatherH3>Wind</WeatherH3>
          <WindImage
            src={windIcon}
            alt={`Wind direction - ${props.weather.wind.deg}`}
            style={{ transform: `rotate(${props.weather.wind.deg}deg)` }}
          />
          <Info>{convertWind(props.weather.wind.speed)}</Info>
        </WeatherSection>
      </WeatherUI>
    </WeatherWrapper>
  );
};

export default WeatherInfo;
