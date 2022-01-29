import React, { FormEvent, useRef, useState } from "react";

import "./App.css";
import { Main, Container } from "./styles/styles";
import AuthCard from "./components/authentication/AuthCard";
import GlobalFonts from "./styles/fonts/fonts";

function App() {
  const nodeRef = useRef(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    const username = document.getElementById("username") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    if (username.value.length < 1) setError("Please enter a username.");
    if (password.value.length < 6)
      setError("Please enter a password with at least 5 characters.");
    console.log([username.value, password.value]);
    console.log(error);
    setIsLoggedIn(true);
  };
  return (
    <Main>
      <GlobalFonts />
      <Container>
        <AuthCard onLogin={loginHandler} isLoggedIn={isLoggedIn}></AuthCard>
      </Container>
    </Main>
  );
}

export default App;
