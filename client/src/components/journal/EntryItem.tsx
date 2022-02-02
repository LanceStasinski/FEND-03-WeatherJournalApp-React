import React from "react";
import styled from "styled-components";

import { Entry } from "./Journal";
import Text from "./Text";
import { Card } from "../../styles/styles";

const EntryCard = styled(Card)`
  width: 100%;
  height: 20rem;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const EntryItem: React.FC<{ entry: Entry }> = (props) => {
  return (
    <EntryCard>
      <Text
        date={props.entry.date}
        subject={props.entry.subject}
        text={props.entry.text}
      />
      <div>
        Weather
      </div>
    </EntryCard>
  );
};

export default EntryItem;
