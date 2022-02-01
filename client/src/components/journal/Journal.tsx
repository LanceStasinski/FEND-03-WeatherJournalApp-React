import React, { useContext } from "react";
import styled from "styled-components";

import {
  Button,
  Header,
  User,
  Controls,
  SettingIcon,
  CloudIcon,
  Container
} from "../../styles/styles";
import { AuthContext } from "../shared/context/auth-context";
import { useHttpClient } from "../shared/hooks/http-hook";
import gearIcon from "../../assets/gearIcon.png";
import cloudIcon from "../../assets/cloudIcon.png";

const DUMMY = {};

const Logout = styled(Button)`
  margin: 0 1rem 2px 0;
  background-color: transparent;
  color: #fff;
  font-size: 20px;

  &:hover {
    background-color: transparent;
    animation: turnBlue 0.5s linear forwards;
  }

  @keyframes turnBlue {
    from {
      color: #fff;
    }
    to {
      color: var(--primary-color);
    }
  }
`;

const Journal: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const { isLoading, httpError, sendRequest, clearError } = useHttpClient();

  const logoutHandler = () => {
    authCtx.logout();
  };

  const zip = "04473";
  const units = "imperial";

  const addEntry = () => {
    const responseData = sendRequest(
      `${process.env.REACT_APP_REST_API}/new-entry`,
      "POST",
      JSON.stringify({ zip }),
      {
        "Content-Type": "application/json",
      }
    );
  };

  return (
    <React.Fragment>
      <Header>
        <User>{authCtx.username}</User>
        <Controls>
          <Logout onClick={logoutHandler}>Logout</Logout>
          <SettingIcon src={gearIcon} alt="gear icon" />
        </Controls>
      </Header>
      <Container>
        <CloudIcon src={cloudIcon} alt='Cloud with plus symbol' />
      </Container>

      <Button onClick={addEntry}>Add Entry</Button>
    </React.Fragment>
  );
};

export default Journal;
