import React, { FormEvent, useState } from "react";

import "./App.css";
import { Main, Container } from "./styles/styles";
import AuthCard from "./components/authentication/AuthCard";
import GlobalStyles from "./styles/global";
import ErrorModal from "./components/shared/ErrorModal";

function App() {
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    const username = document.getElementById("username") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    if (username.value.length < 1) setError("Please enter a username.");
    if (password.value.length < 5)
      setError("Please enter a password with at least 5 characters.");
    console.log([username.value, password.value]);
    console.log(error);
  };

  const clearErrorHandler = () => {
    setError(undefined)
  }
  return (
    <Main>
      <GlobalStyles />
      <ErrorModal onClear={clearErrorHandler} error={error} />
      <Container>
        <AuthCard onLogin={loginHandler} isLoggedIn={isLoggedIn}></AuthCard>
      </Container>
    </Main>
  );
}

export default App;
