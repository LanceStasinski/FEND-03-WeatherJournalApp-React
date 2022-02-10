import React, { useState, createRef, FormEvent } from "react";
import styled from "styled-components";

import editIcon from "../../assets/editIcon.png";
import deleteIcon from "../../assets/deleteIcon.png";
import saveIcon from "../../assets/saveIcon.png";
import trashIcon from "../../assets/trashIcon.png";
import {
  Header,
  Subject,
  Date,
  TextBox,
  EntryText,
  SubjectWrapper,
  ButtonWrapper,
  EntryAction,
  ActionIcon,
  SubjectInput,
  TextBoxInput,
  EntryForm,
} from "../../styles/styles";

const EntryHeader = styled(Header)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 400px) {
    display: grid;
    grid-template-columns: 80% 20%;
  }
`;

interface Props {
  onDelete: (id: string) => Promise<void>;
  onUpdate: (subject: string, message: string, id: string) => Promise<void>;
  entryId: string;
  date: {
    month: string;
    day: number;
    year: number;
  };
  subject: string;
  text: string;
}

const Text: React.FC<Props> = (props) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [subject, setSubject] = useState(props.subject);
  const [text, setText] = useState(props.text);
  const subjectRef = createRef<HTMLInputElement>();
  const textRef = createRef<HTMLTextAreaElement>();

  const subjectChangeHandler = () => {
    setSubject(subjectRef.current!.value);
  };

  const textChangeHandler = () => {
    setText(textRef.current!.value);
  };

  const editEntry = (e: FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
  };

  const cancelEditEntry = (e: FormEvent) => {
    e.preventDefault();
    setIsUpdating(false);
    setSubject(props.subject);
    setText(props.text);
  };

  const updateEntryHandler = (e: FormEvent) => {
    e.preventDefault();
    props.onUpdate(subject, text, props.entryId);
    setIsUpdating(false);
  };

  return (
    <React.Fragment>
      {!isUpdating && (
        <EntryForm>
          <EntryHeader>
            <SubjectWrapper>
              <Subject>{props.subject}</Subject>
              <Date>{`${props.date.month} ${props.date.day}, ${props.date.year}`}</Date>
            </SubjectWrapper>
            <ButtonWrapper>
              <EntryAction onClick={editEntry}>
                <ActionIcon src={editIcon} alt="edit icon" />
              </EntryAction>
              <EntryAction
                onClick={() => {
                  props.onDelete(props.entryId);
                }}
              >
                <ActionIcon src={trashIcon} alt="delete icon" />
              </EntryAction>
            </ButtonWrapper>
          </EntryHeader>
          <TextBox>
            <EntryText>{props.text}</EntryText>
          </TextBox>
        </EntryForm>
      )}
      {isUpdating && (
        <EntryForm>
          <EntryHeader>
            <SubjectWrapper>
              <SubjectInput
                ref={subjectRef}
                value={subject}
                onChange={subjectChangeHandler}
                id="subject-input"
              />
              <Date>{`${props.date.month} ${props.date.day}, ${props.date.year}`}</Date>
            </SubjectWrapper>
            <ButtonWrapper>
              <EntryAction type="button" onClick={updateEntryHandler}>
                <ActionIcon src={saveIcon} alt="save icon" />
              </EntryAction>
              <EntryAction onClick={cancelEditEntry}>
                <ActionIcon src={deleteIcon} alt="cancel icon" />
              </EntryAction>
              <EntryAction
                onClick={() => {
                  props.onDelete(props.entryId);
                }}
              >
                <ActionIcon src={trashIcon} alt="delete icon" />
              </EntryAction>
            </ButtonWrapper>
          </EntryHeader>
          <TextBoxInput
            ref={textRef}
            value={text}
            onChange={textChangeHandler}
            id="text-input"
          />
        </EntryForm>
      )}
    </React.Fragment>
  );
};

export default Text;
