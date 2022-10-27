import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigator from "./navigation/navigator/RootStackNavigator";
import FavoritesProvider from "./store/context/favorites-context";
import store from "./store/redux/store";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <FavoritesProvider>
          <NavigationContainer>
            <RootStackNavigator />
          </NavigationContainer>
        </FavoritesProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
