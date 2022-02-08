import React, { useContext, useState } from "react";
import styled from "styled-components";

import {
  Button,
  Header,
  User,
  Controls,
  SettingIcon,
  CloudIcon,
  Container,
  SettingsBtn,
} from "../../styles/styles";
import { AuthContext } from "../shared/context/auth-context";
import { useHttpClient } from "../shared/hooks/http-hook";
import gearIcon from "../../assets/gearIcon.png";
import cloudIcon from "../../assets/cloudIcon.png";
import EntriesList from "./EntriesList";
import Settings from "./Settings";
import EntryForm from "./EntryForm";

export interface Entry {
  weather: {
    description: string;
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
      description: "overcast clouds",
      icon: "10d",
      temp: 273.77,
      wind: {
        speed: 3,
        deg: 45,
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
  {
    weather: {
      description: "overcast clouds",
      icon: "10d",
      temp: 273.77,
      wind: {
        speed: 3,
        deg: 45,
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
    _id: "e2",
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

const AddBtn = styled(SettingsBtn)`
  margin: 0;
`;

const Journal: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const { isLoading, httpError, sendRequest, clearError } = useHttpClient();

  const logoutHandler = () => {
    authCtx.logout();
  };

  const zip = "04473";

  const openEditor = () => {
    setIsAddingEntry((prevState) => !prevState);
  };

  const addEntry = () => {
    const responseData = sendRequest(
      `${process.env.REACT_APP_REST_API}/new-entry`,
      "POST",
      JSON.stringify({ zip }),
      {
        Authorization: "Bearer " + authCtx.token,
        "Content-Type": "application/json",
      }
    );
  };

  const openSettings = () => {
    setSettingsIsOpen(true);
  };

  const closeSettings = () => {
    setSettingsIsOpen(false);
  };

  return (
    <React.Fragment>
      <Settings show={settingsIsOpen} onCancel={closeSettings} />
      <Header>
        <User>{authCtx.username}</User>
        <Controls>
          <Logout onClick={logoutHandler}>Logout</Logout>
          <SettingsBtn onClick={openSettings}>
            <SettingIcon src={gearIcon} alt="gear icon" />
          </SettingsBtn>
        </Controls>
      </Header>
      <Container>
        {
          <AddBtn onClick={openEditor}>
            <CloudIcon src={cloudIcon} alt="Cloud with plus symbol" />{" "}
          </AddBtn>
        }
        {isAddingEntry && <EntryForm />}
        <EntriesList entries={DUMMY} />
      </Container>

      <Button onClick={addEntry}>Add Entry</Button>
    </React.Fragment>
  );
};

export default Journal;
