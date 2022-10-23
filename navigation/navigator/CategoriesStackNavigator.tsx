import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../../screens/CategoryScreen";
import MealDetailsScreen from "../../screens/MealDetailsScreen";
import MealsOverviewScreen from "../../screens/MealsOverviewScreen";
import FavoritesScreen from "../../screens/FavoritesScreen";

export type CategoriesStackNavigatorParamsList = {
  Drawer: undefined;
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

const Stack = createNativeStackNavigator<CategoriesStackNavigatorParamsList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#3f2f25",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#351401",
      },
      headerTintColor: "white",
      contentStyle: {
        backgroundColor: "#3f2f25",
      },
    }}
  >
    <Stack.Screen
      name="Drawer"
      component={DrawerNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
    <Stack.Screen
      name="MealDetails"
      component={MealDetailsScreen}
      options={{
        title: "Meal Details",
      }}
    />
  </Stack.Navigator>
);
