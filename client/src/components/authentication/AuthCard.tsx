import React from "react";
import styled from "styled-components";

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

  @media (min-width: 768px) {
    width: 40%;
    margin: 0 25%;
  }
`;

const StyledP = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #999;
  text-align: center;
  margin-top: 2rem;
`;

const AuthCard: React.FC = () => {
  return (
    <LoginCard>
      <Title>Weather Journal</Title>
      <Form>
        <Input name="username" image={personIcon} type="text" />
        <Input name="password" image={lockIcon} type="password" />
        <Button>LOGIN</Button>
      </Form>
      <StyledP>Login to or signup for your profile.</StyledP>
    </LoginCard>
  );
};

export default AuthCard;
