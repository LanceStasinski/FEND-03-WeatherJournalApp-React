import React from "react";
import styled from "styled-components";

import {
  EntryWrapper,
  Header,
  Subject,
  Date,
  TextBox,
  EntryText,
} from "../../styles/styles";

const EntryHeader = styled(Header)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0 0 2rem;
  margin-bottom: 1rem;
`;

interface Props {
  date: {
    month: string;
    day: number;
    year: number;
  };
  subject: string;
  text: string;
}

const Text: React.FC<Props> = (props) => {
  return (
    <EntryWrapper>
      <EntryHeader>
        <Subject>{props.subject}</Subject>
        <Date>{`${props.date.month} ${props.date.day}, ${props.date.year}`}</Date>
      </EntryHeader>
      <TextBox>
        <EntryText>{props.text}</EntryText>
      </TextBox>
    </EntryWrapper>
  );
};

export default Text;
