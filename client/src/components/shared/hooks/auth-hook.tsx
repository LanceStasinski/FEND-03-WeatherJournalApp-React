import { useState, useCallback, useEffect } from "react";

let logoutTimer: any;

export const useAuth = () => {
  const [token, setToken] = useState("");
  const [tokenExpiration, setTokenExpiration] = useState<Date>();
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [unitPreference, setUnitPreference] = useState<
    "imperial" | "metric" | "standard"
  >("imperial");
  const [zipCode, setZipCode] = useState("");

  const login = useCallback(
    (uid, token, username, unitPreference, zipCode, expirationDate) => {
      setUsername(username);
      setToken(token);
      setUserId(uid);
      setUnitPreference(unitPreference);
      setZipCode(zipCode);
      const tokenExpiration =
        expirationDate || new Date(new Date().getTime() + 1000 * 60 * 120);
      setTokenExpiration(tokenExpiration);
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: uid,
          token,
          username,
          unitPreference,
          zipCode,
          expiration: tokenExpiration.toISOString(),
        })
      );
    },
    []
  );

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user") as string);
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.username,
        storedData.unitPreference,
        storedData.zipCode,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  const logout = useCallback(() => {
    setToken("");
    setTokenExpiration(undefined);
    setUserId("");
    setUnitPreference("imperial");
    setZipCode("");
    localStorage.removeItem("user");
  }, []);

  const updatePreferences = useCallback((preference, zipCode) => {
    setUnitPreference(preference);
    setZipCode(zipCode);
    const storedData = JSON.parse(localStorage.getItem("user") as string);
    storedData.unitPreference = preference;
    storedData.zipCode = zipCode;
    localStorage.setItem("user", JSON.stringify(storedData));
  }, []);

  useEffect(() => {
    if (token && tokenExpiration) {
      const remainingTime = tokenExpiration.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, tokenExpiration, logout]);

  return {
    token,
    login,
    logout,
    userId,
    username,
    unitPreference,
    zipCode,
    updatePreferences,
  };
};
