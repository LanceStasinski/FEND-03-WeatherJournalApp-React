import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import { Backdrop, MainFooter, FooterLink } from "./styles/styles";
import GlobalStyles from "./styles/global";
import { AuthContext } from "./components/shared/context/auth-context";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import { useAuth } from "./components/shared/hooks/auth-hook";
const Auth = lazy(() => import("./components/authentication/Auth"));
const Journal = lazy(() => import("./components/journal/Journal"));

function App() {
  const {
    token,
    login,
    logout,
    userId,
    username,
    unitPreference,
    zipCode,
    updatePreferences,
  } = useAuth();

  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/journal" element={<Journal />} />
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
        login,
        username,
        logout,
        userId,
        token,
        unitPreference,
        zipCode,
        updatePreferences,
      }}
    >
      <GlobalStyles />
      <BrowserRouter>
        <Backdrop />
        <main>
          <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
        </main>
        <MainFooter>
          <FooterLink href="https://lancestasinski.herokuapp.com">
            lancestasinski.herokuapp.com
          </FooterLink>
          <FooterLink href="https://openweathermap.org/api">
            OpenWeatherMap
          </FooterLink>
        </MainFooter>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
