import React from "react";
import styled from "styled-components";

import personIcon from "../../assets/personIcon.png";
import lockIcon from "../../assets/lockIcon.png";
import { Card, Form, Title } from "../../styles/styles";
import Input from "./Input";

const LoginCard = styled(Card)`
  position: absolute;
  top: 20vh;
  width: 70%;
  margin: 0 12.5%;
  padding: 1rem;
  background-color: rgba(256, 256, 256, 0.6);
  box-shadow: none;
  height: 500px;

  @media (min-width: 768px) {
    width: 40%;
    margin: 0 25%;
  }
`;

const AuthCard: React.FC = () => {
  return (
    <LoginCard>
      <Title>Weather Journal</Title>
      <Form>
        <Input name="username" image={personIcon} />
        <Input name="password" image={lockIcon} />
      </Form>
    </LoginCard>
  );
};

export default AuthCard;
