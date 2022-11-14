import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import Navigator from "./navigation/navigator/Navigator";
import AuthProvider, { AuthContext } from "./store/auth-context";

function Root() {
  const { authenticate } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      const authToken = await AsyncStorage.getItem("token");
      if (authToken) {
        authenticate(authToken);
      }
      setIsLoading(false);
    }
    fetchToken();
  }, []);

  if (isLoading) {
    return <AppLoading />;
  }

  return <Navigator />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthProvider>
        <Root />
      </AuthProvider>
    </>
  );
}
