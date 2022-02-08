import React, { useRef } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

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
  margin-bottom: 1rem;
`;

const JournalForm = styled(Form)`
  align-items: flex-start;
  width: 100%;
  margin: 0;
  padding: 0 2.5%;
`;

const EntryForm: React.FC<{ show: boolean }> = (props) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={300}
      classNames="grow"
      nodeRef={nodeRef}
    >
      <Editor ref={nodeRef}>
        <FormHeading>New Journal Entry</FormHeading>
        <hr />
        <JournalForm>
          <EntryInput id="text" type="text" placeholder="Subject" />
          <TextArea id="body" placeholder="New message" />
          <FormBtnWrapper>
            <Button type="submit">Add</Button>
          </FormBtnWrapper>
        </JournalForm>
      </Editor>
    </CSSTransition>
  );
};

export default EntryForm;
