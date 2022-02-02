import React, { useContext } from "react";
import styled from "styled-components";

import {
  Button,
  Header,
  User,
  Controls,
  SettingIcon,
  CloudIcon,
  Container,
} from "../../styles/styles";
import { AuthContext } from "../shared/context/auth-context";
import { useHttpClient } from "../shared/hooks/http-hook";
import gearIcon from "../../assets/gearIcon.png";
import cloudIcon from "../../assets/cloudIcon.png";
import EntriesList from "./EntriesList";

export interface Entry {
  weather: {
    icon: string;
    temp: number;
    wind: {
      speed: number;
      deg: number;
    };
  };
  location: string;
  subject: string;
  text: string;
  date: {
    month: string;
    day: number;
    year: number;
  };
  _id: string;
}

export type Entries = Entry[];

const DUMMY: Entries = [
  {
    weather: {
      icon: "04d",
      temp: 273.77,
      wind: {
        speed: 0.45,
        deg: 170,
      },
    },
    location: "Orono",
    subject: "A day in Orono",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: {
      month: "February",
      day: 2,
      year: 2022,
    },
    _id: "e1",
  },
];

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
        <CloudIcon src={cloudIcon} alt="Cloud with plus symbol" />
        <EntriesList entries={DUMMY} />
      </Container>

      <Button onClick={addEntry}>Add Entry</Button>
    </React.Fragment>
  );
};

export default Journal;
