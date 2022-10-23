import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RootDrawerNavigator from "./navigation/navigator/RootDrawerNavigator";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}
