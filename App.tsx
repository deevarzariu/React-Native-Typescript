import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import RootStackNavigator from "./navigation/navigator/RootStackNavigator";
import store from "./store/store";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
}
