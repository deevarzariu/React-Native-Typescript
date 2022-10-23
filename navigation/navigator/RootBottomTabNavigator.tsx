import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import WelcomeScreen from "../../screens/WelcomeScreen";
import UserScreen from "../../screens/UserScreen";

const BottomTabs = createBottomTabNavigator();

function RootBottomTabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3c0a6b",
        },
        headerTintColor: "white",
        tabBarActiveTintColor: "#3c0a6b",
      }}
    >
      <BottomTabs.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default RootBottomTabNavigator;
