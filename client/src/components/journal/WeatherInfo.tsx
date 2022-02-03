import React from "react";
import styled from "styled-components";

import {
  WeatherWrapper,
  Header,
  WeatherUI,
  WeatherSection,
  WeatherIcon,
  Subject,
} from "../../styles/styles";
import windIcon from "../../assets/windIcon.png";

const WeatherHeader = styled(Header)`
  justify-content: center;
`;

const WindImage = styled(WeatherIcon)`
  width: 50px;
  height: 50px;
  margin: 2rem 1rem 2rem 1rem;
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
  return (
    <WeatherWrapper>
      <WeatherHeader>
        <Subject>{props.location}</Subject>
      </WeatherHeader>
      <WeatherUI>
        <WeatherSection>
          <WeatherIcon
            src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`}
            alt={props.weather.description}
          />
          <p>{`${props.weather.temp} K`}</p>
        </WeatherSection>
        <WeatherSection>
          <WindImage
            src={windIcon}
            alt={`Wind direction - ${props.weather.wind.deg}`}
            style={{ transform: `rotate(${props.weather.wind.deg}deg)` }}
          />
        </WeatherSection>
      </WeatherUI>
    </WeatherWrapper>
  );
};

export default WeatherInfo;
