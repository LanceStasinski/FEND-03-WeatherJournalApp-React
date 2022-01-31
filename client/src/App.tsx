import React, { FormEvent, useState } from "react";

import "./App.css";
import { Main, Container } from "./styles/styles";
import Auth from "./components/authentication/Auth";
import GlobalStyles from "./styles/global";
import ErrorModal from "./components/shared/ErrorModal";

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
