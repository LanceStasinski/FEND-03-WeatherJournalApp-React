import React, { FormEvent, useRef, useState, useContext } from "react";
import styled from "styled-components";

import personIcon from "../../assets/personIcon.png";
import lockIcon from "../../assets/lockIcon.png";
import { Card, Form, Title, Button } from "../../styles/styles";
import Input from "./Input";
import ErrorModal from "../shared/ErrorModal";
import { AuthContext } from "../shared/context/auth-context";
import { useHttpClient } from "../shared/hooks/http-hook";
import LoadingSpinner from "../shared/LoadingSpinner";

const LoginCard = styled(Card)`
  position: fixed;
  top: 20vh;
  width: 70%;
  left: 15%;
  padding: 1rem;
  background-color: rgba(256, 256, 256, 0.6);
  box-shadow: none;
  height: 380px;
  animation: slideDown 500ms ease-in forwards;

  @media (min-width: 768px) {
    width: 40%;
    left: 30%;
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

const Auth: React.FC = () => {
  const nodeRef = useRef(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const authCtx = useContext(AuthContext);
  const { isLoading, httpError, sendRequest, clearError } = useHttpClient();

  const loginHandler = async (e: FormEvent) => {
    e.preventDefault();
    const username = document.getElementById("username") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    if (username.value.length < 1) setError("Please enter a username.");
    if (password.value.length < 5)
      setError("Please enter a password with at least 5 characters.");

    if (!error) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_REST_API}/auth`,
          "POST",
          JSON.stringify({
            username: username.value,
            password: password.value,
          }),
          {
            "Content-type": "application/json",
          }
        );
        authCtx.login(
          responseData.userId,
          responseData.token,
          responseData.username
        );
      } catch (error) {}
    }
  };

  const clearErrorHandler = () => {
    setError(undefined);
  };

  return (
    <React.Fragment>
      <ErrorModal onClear={clearErrorHandler} error={error || httpError} />
      <LoginCard ref={nodeRef}>
        <Title>Weather Journal</Title>
        <Form>
          <Input name="username" image={personIcon} type="text" />
          <Input name="password" image={lockIcon} type="password" />
          <Button type="button" onClick={loginHandler}>
            LOGIN
          </Button>
        </Form>
        <StyledP>Login to or signup for your profile.</StyledP>
      </LoginCard>
      {isLoading && <LoadingSpinner />}
    </React.Fragment>
  );
};

export default Auth;
