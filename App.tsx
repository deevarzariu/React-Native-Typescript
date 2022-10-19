import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./navigation/navigator/RootStackNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
