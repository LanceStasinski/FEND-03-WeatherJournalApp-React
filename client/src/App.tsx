import React from "react";
import "./App.css";
import styled from "styled-components";

import { Main, Container, Title } from "./styles/styles";
import AuthCard from "./components/AuthCard";
import GlobalFonts from "./styles/fonts/fonts";

function App() {
  return (
    <Main>
      <GlobalFonts />
      <Container>
        <Title>Weather Journal</Title>
        <AuthCard></AuthCard>
      </Container>
    </Main>
  );
}

export default App;
