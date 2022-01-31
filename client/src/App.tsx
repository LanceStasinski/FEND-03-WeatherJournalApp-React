import React, { useState, lazy, Suspense } from "react";

import "./App.css";
import { Main, Container } from "./styles/styles";
import GlobalStyles from "./styles/global";

import Auth from './components/authentication/Auth'
// const Auth = lazy(() => import("./components/authentication/Auth"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <Main>
      <GlobalStyles />

      <Auth isLoggedIn={isLoggedIn}></Auth>
    </Main>
  );
}

export default App;
