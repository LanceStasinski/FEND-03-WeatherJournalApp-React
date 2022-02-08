import React from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  Form,
  FormHeading,
  EntryInput,
  TextArea,
  FormBtnWrapper,
} from "../../styles/styles";

const Editor = styled(Card)`
  width: 100%;
  background-color: rgba(256, 256, 256, 0.6);
`;

const JournalForm = styled(Form)`
  align-items: flex-start;
  width: 100%;
  margin: 0;
  padding: 0 2.5%;
`;

const EntryForm: React.FC = () => {
  return (
    <Editor>
      <FormHeading>New Journal Entry</FormHeading>
      <hr />
      <JournalForm>
        <EntryInput id="text" type="text" placeholder="Subject" />
        <TextArea id="body" placeholder="New message." />
        <FormBtnWrapper>
          <Button type="submit">Add</Button>
        </FormBtnWrapper>
      </JournalForm>
    </Editor>
  );
};

export default EntryForm;
