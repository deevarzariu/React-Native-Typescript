import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./navigation/navigator/Navigator";
import { init } from "./utils/database";

export default function App() {
  const [dbInit, setDbInit] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInit(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbInit) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Navigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
