import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import UserScreen from "../../screens/UserScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";

export type RootDrawerNavigatorParamsList = {
  Welcome: undefined;
  User: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerNavigatorParamsList>();

function RootDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3c0a6b",
        },
        headerTintColor: "white",
        drawerActiveBackgroundColor: "#f0e1ff",
        drawerActiveTintColor: "#3c0a6b",
      }}
    >
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          drawerLabel: "Welcome Screen",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="User"
        component={UserScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default RootDrawerNavigator;
