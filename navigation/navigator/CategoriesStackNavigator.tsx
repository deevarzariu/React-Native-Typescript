import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../screens/CategoryScreen";
import MealDetailsScreen from "../../screens/MealDetailsScreen";
import MealsOverviewScreen from "../../screens/MealsOverviewScreen";

export type CategoriesStackNavigatorParamsList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

const Stack = createNativeStackNavigator<CategoriesStackNavigatorParamsList>();

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
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: "All Categories",
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
