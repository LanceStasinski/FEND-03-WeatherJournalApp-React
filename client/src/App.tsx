import React from "react";
import "./App.css";

import { Main, Container } from "./styles/styles";
import AuthCard from "./components/authentication/AuthCard";
import GlobalFonts from "./styles/fonts/fonts";

function App() {
  return (
    <Main>
      <GlobalFonts />
      <Container>
        <AuthCard></AuthCard>
      </Container>
    </Main>
  );
}

export default App;
