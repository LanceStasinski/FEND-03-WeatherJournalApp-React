import React from "react";
import styled from "styled-components";

import editIcon from "../../assets/editIcon.png";
import deleteIcon from "../../assets/deleteIcon.png";
import {
  EntryWrapper,
  Header,
  Subject,
  Date,
  TextBox,
  EntryText,
  SubjectWrapper,
  ButtonWrapper,
  EntryAction,
  ActionIcon,
} from "../../styles/styles";

const EntryHeader = styled(Header)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 300px) {
    display: grid;
    grid-template-columns: 80% 20%;
  }
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
        <SubjectWrapper>
          <Subject>{props.subject}</Subject>
          <Date>{`${props.date.month} ${props.date.day}, ${props.date.year}`}</Date>
        </SubjectWrapper>
        <ButtonWrapper>
          <EntryAction>
            <ActionIcon src={editIcon} alt='edit icon' />
          </EntryAction>
          <EntryAction>
            <ActionIcon src={deleteIcon} alt='delete icon'/>
          </EntryAction>
        </ButtonWrapper>
      </EntryHeader>
      <TextBox>
        <EntryText>{props.text}</EntryText>
      </TextBox>
    </EntryWrapper>
  );
};

export default Text;
