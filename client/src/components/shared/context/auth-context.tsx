import { createContext } from "react";

export const AuthContext = createContext({
  userId: "",
  username: "",
  token: "",
  login: (
    uid: string,
    token: string,
    username: string,
    unitPreference: string,
    zipCode: string,
    expirationDate?: Date
  ) => {},
  logout: () => {},
  unitPreference: "",
  zipCode: "",
  updatePreferences: (preference: string, zipCode: string) => {},
});
