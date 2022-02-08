import React, { useRef, useState, createRef, FormEvent } from "react";
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

const EntryForm: React.FC<{
  show: boolean;
  onAddEntry: (subject: string, message: string, e: FormEvent) => Promise<boolean>;
}> = (props) => {
  const nodeRef = useRef(null);
  const subjectRef = createRef<HTMLInputElement>();
  const messageRef = createRef<HTMLTextAreaElement>();

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const subjectChangeHandler = () => {
    setSubject(subjectRef.current!.value);
  };

  const messageChangeHandler = () => {
    setMessage(messageRef.current!.value);
  };

  const addEntry = async (e: FormEvent) => {
    const success = await props.onAddEntry(subject, message, e);
    if (success) {
      setSubject("");
      setMessage("");
    }
  };

  return (
    <React.Fragment>
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
          <JournalForm onSubmit={addEntry}>
            <EntryInput
              ref={subjectRef}
              value={subject}
              onChange={subjectChangeHandler}
              id="subject"
              type="text"
              placeholder="Subject"
            />
            <TextArea
              ref={messageRef}
              value={message}
              onChange={messageChangeHandler}
              id="body"
              placeholder="New message"
            />
            <FormBtnWrapper>
              <Button type="submit">Add</Button>
            </FormBtnWrapper>
          </JournalForm>
        </Editor>
      </CSSTransition>
    </React.Fragment>
  );
};

export default EntryForm;
