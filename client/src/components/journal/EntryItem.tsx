import React from "react";
import styled from "styled-components";

import { Entry } from "./Journal";
import Text from "./Text";
import WeatherInfo from "./WeatherInfo";
import { Card } from "../../styles/styles";

const EntryCard = styled(Card)`
  width: 100%;
  height: 20rem;
  display: grid;
  grid-template-columns: 70% 30%;
`;

const EntryItem: React.FC<{ entry: Entry }> = (props) => {
  return (
    <EntryCard>
      <Text
        date={props.entry.date}
        subject={props.entry.subject}
        text={props.entry.text}
      />
      <WeatherInfo
        weather={props.entry.weather}
        location={props.entry.location}
      />
    </EntryCard>
  );
};

export default EntryItem;
