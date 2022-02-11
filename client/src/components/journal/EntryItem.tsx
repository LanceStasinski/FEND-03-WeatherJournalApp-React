import React from "react";
import styled from "styled-components";

import { Entry } from "./Journal";
import Text from "./Text";
import WeatherInfo from "./WeatherInfo";
import { Card } from "../../styles/styles";

interface StyleProps {
  delay: number;
}

const EntryCard = styled(Card)<StyleProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  opacity: 0;
  animation: slideInRight 0.5s ease-out forwards;
  animation-delay: ${(props) => props.delay + "s"};

  @media screen and (min-width: 990px) {
    height: 20rem;
    display: grid;
    grid-template-columns: 70% 30%;
  }

  @keyframes slideInRight {
    from {
      transform: translateX(-10rem);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const EntryItem: React.FC<{
  entry: Entry;
  delay: number;
  onOpenWarningModal: (id: string) => void;
  onUpdateEntry: (
    subject: string,
    message: string,
    id: string
  ) => Promise<void>;
}> = (props) => {
  return (
    <EntryCard delay={props.delay}>
      <Text
        onOpenWarningModal={props.onOpenWarningModal}
        onUpdate={props.onUpdateEntry}
        entryId={props.entry._id}
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
