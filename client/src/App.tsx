import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import { Main, Container } from "./styles/styles";
import GlobalStyles from "./styles/global";
import { AuthContext } from "./components/shared/context/auth-context";

import LoadingSpinner from "./components/shared/LoadingSpinner";
const Auth = lazy(() => import("./components/authentication/Auth"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/journal" />
        <Route path="*" element={<Navigate to="/journal" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="login" element={<Auth isLoggedIn={isLoggedIn} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: false,
        login: () => {},
        username: "",
        logout: () => {},
        userId: "",
        token: "",
      }}
    >
      <GlobalStyles />
      <BrowserRouter>
        <Main>
          <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
        </Main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
