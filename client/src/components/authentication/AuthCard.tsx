import React, { FormEvent, useRef } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import personIcon from "../../assets/personIcon.png";
import lockIcon from "../../assets/lockIcon.png";
import { Card, Form, Title, Button } from "../../styles/styles";
import Input from "./Input";

const LoginCard = styled(Card)`
  position: absolute;
  top: 20vh;
  width: 70%;
  margin: 0 12.5%;
  padding: 1rem;
  background-color: rgba(256, 256, 256, 0.6);
  box-shadow: none;
  height: 380px;
  /* animation: slideDown 500ms ease-in forwards; */

  @media (min-width: 768px) {
    width: 40%;
    margin: 0 25%;
  }

  @keyframes slideDown {
    from {
      transform: translateY(-20rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const StyledP = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #999;
  text-align: center;
  margin-top: 2rem;
`;

const AuthCard: React.FC<{
  onLogin: (e: FormEvent) => void;
  isLoggedIn: boolean;
}> = (props) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={!props.isLoggedIn}
      mountOnEnter
      unmountOnExit
      timeout={300}
      classNames="slide-down"
      nodeRef={nodeRef}
    >
      <LoginCard ref={nodeRef}>
        <Title>Weather Journal</Title>
        <Form>
          <Input name="username" image={personIcon} type="text" />
          <Input name="password" image={lockIcon} type="password" />
          <Button type="button" onClick={props.onLogin}>
            LOGIN
          </Button>
        </Form>
        <StyledP>Login to or signup for your profile.</StyledP>
      </LoginCard>
    </CSSTransition>
  );
};

export default AuthCard;
