import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./navigation/navigator/RootStackNavigator";
import FavoritesProvider from "./store/context/favorites-context";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </FavoritesProvider>
    </>
  );
}

const styles = StyleSheet.create({});
