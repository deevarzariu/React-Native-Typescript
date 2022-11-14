import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logOut: () => {},
});

interface AuthProviderProps {
  children: JSX.Element | string;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState("");
  const isAuthenticated = !!token;

  function authenticate(authToken: string) {
    setToken(authToken);
    AsyncStorage.setItem("token", authToken);
  }

  function logOut() {
    setToken("");
    AsyncStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, authenticate, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
