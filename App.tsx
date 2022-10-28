import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
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
