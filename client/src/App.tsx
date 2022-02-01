import React, {lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import { Main, Container } from "./styles/styles";
import GlobalStyles from "./styles/global";
import { AuthContext } from "./components/shared/context/auth-context";

import LoadingSpinner from "./components/shared/LoadingSpinner";
import { useAuth } from "./components/shared/hooks/auth-hook";
const Auth = lazy(() => import("./components/authentication/Auth"));

function App() {
  const {token, login, logout, userId, username} = useAuth();

  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/journal" />
        <Route path="*" element={<Navigate to="/journal" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        login: login,
        username: username,
        logout: logout,
        userId: userId,
        token: token,
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
