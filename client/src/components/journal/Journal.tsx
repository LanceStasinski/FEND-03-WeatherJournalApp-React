import React, { useContext, useState, FormEvent, useEffect } from "react";
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
  WarningModalFooter,
  ErrorButton,
} from "../../styles/styles";
import { AuthContext } from "../shared/context/auth-context";
import gearIcon from "../../assets/gearIcon.png";
import cloudIcon from "../../assets/cloudIcon.png";
import EntriesList from "./EntriesList";
import Settings from "./Settings";
import EntryForm from "./EntryForm";
import ErrorModal from "../shared/ErrorModal";
import { useHttpClient } from "../shared/hooks/http-hook";
import LoadingSpinner from "../shared/LoadingSpinner";
import Modal from "../shared/Modal";

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

const DeleteButton = styled(ErrorButton)`
  margin-top: 1rem;
`

const Journal: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [formError, setFormError] = useState("");
  const [entries, setEntries] = useState<Entries>([]);
  const [entryToDeleteId, setEntryToDeleteId] = useState<string | null>(null);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const { isLoading, httpError, sendRequest, clearError } = useHttpClient();

  const logoutHandler = () => {
    authCtx.logout();
  };

  const toggleEditor = () => {
    setIsAddingEntry((prevState) => !prevState);
  };

  const openSettings = () => {
    setSettingsIsOpen(true);
  };

  const closeSettings = () => {
    setSettingsIsOpen(false);
  };

  const clearFormError = () => {
    setFormError("");
  };

  useEffect(() => {
    const getEntries = async () => {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_REST_API}/entries`,
        "GET",
        null,
        {
          Authorization: "Bearer " + authCtx.token,
        }
      );
      setEntries(responseData.entries);
    };
    getEntries();
  }, [sendRequest, authCtx.token]);

  const addEntryHandler = async (
    subject: string,
    message: string,
    e: FormEvent
  ) => {
    e.preventDefault();
    let success = false;
    if (subject.length < 1) {
      setFormError("Please add a subject.");
    } else if (message.length < 1) {
      setFormError("Please add text to your journal entry.");
    } else {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_REST_API}/new-entry`,
          "POST",
          JSON.stringify({ zip: authCtx.zipCode, subject, message }),
          {
            Authorization: "Bearer " + authCtx.token,
            "Content-Type": "application/json",
          }
        );
        if (responseData) {
          success = true;
          setEntries((prevEntries) => [...prevEntries!, responseData.newEntry]);
          toggleEditor();
        }
      } catch (error) {}
    }
    return success;
  };

  const deleteEntryHandler = async () => {
    console.log(entryToDeleteId);
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_REST_API}/entries`,
        "DELETE",
        JSON.stringify({ id: entryToDeleteId }),
        {
          Authorization: "Bearer " + authCtx.token,
          "Content-Type": "application/json",
        }
      );
      setEntryToDeleteId(null);
      setShowWarningModal(false);
      setEntries(entries.filter((entry) => entry._id !== response.id));
    } catch (error) {}
  };

  const openModalHandler = (id: string) => {
    setEntryToDeleteId(id);
    setShowWarningModal(true);
  };

  const closeModalHandler = () => {
    setShowWarningModal(false);
    setEntryToDeleteId(null);
  };

  const updateEntryHandler = async (
    subject: string,
    message: string,
    id: string
  ) => {
    if (subject.length < 1) {
      setFormError("Please enter a subject.");
    } else if (message.length < 1) {
      setFormError("Please add text to the journal entry.");
    } else {
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_REST_API}/entries/${id}`,
          "PATCH",
          JSON.stringify({ zip: authCtx.zipCode, subject, message }),
          {
            Authorization: "Bearer " + authCtx.token,
            "Content-Type": "application/json",
          }
        );
        if (response) {
          const tempEntries = [...entries];
          const indexToUpdate = tempEntries.findIndex(
            (entry) => entry._id === id
          );
          tempEntries[indexToUpdate] = response.updatedEntry;
          setEntries(tempEntries);
        }
      } catch (error) {}
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={formError} onClear={clearFormError} />
      <ErrorModal error={httpError} onClear={clearError} />
      {isLoading && <LoadingSpinner />}
      <Settings show={settingsIsOpen} onCancel={closeSettings} />
      <Modal
        show={showWarningModal}
        onCancel={closeModalHandler}
        header="Delete Entry?"
        footer={
          <WarningModalFooter>
            <Button type="button" onClick={closeModalHandler}>
              Cancel
            </Button>
            <DeleteButton type="button" onClick={deleteEntryHandler}>
              Delete
            </DeleteButton>
          </WarningModalFooter>
        }
      >
        <p>Are you sure you want to delete this entry?</p>
      </Modal>
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
        <AddBtn onClick={toggleEditor}>
          <CloudIcon src={cloudIcon} alt="Cloud with plus symbol" />
        </AddBtn>

        <EntryForm show={isAddingEntry} onAddEntry={addEntryHandler} />
        <EntriesList
          entries={entries!}
          onOpenWarningModal={openModalHandler}
          onUpdateEntry={updateEntryHandler}
        />
      </Container>
    </React.Fragment>
  );
};

export default Journal;
