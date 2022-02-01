import React, { useContext } from "react";
import styled from "styled-components";

import { Button } from "../../styles/styles";
import { AuthContext } from "../shared/context/auth-context";
import { useHttpClient } from "../shared/hooks/http-hook";

const Journal: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const { isLoading, httpError, sendRequest, clearError } = useHttpClient();

  const logoutHandler = () => {
    authCtx.logout();
  };

  const zip = "04473";
  const units = 'imperial'

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
      <Button onClick={logoutHandler}>Logout</Button>
      <Button onClick={addEntry}>Add Entry</Button>
    </React.Fragment>
  );
};

export default Journal;
