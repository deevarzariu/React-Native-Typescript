import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailsScreen from "../../screens/MealDetailsScreen";
import MealsOverviewScreen from "../../screens/MealsOverviewScreen";

export type MealsOverviewStackNavigatorParamsList = {
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

const Stack =
  createNativeStackNavigator<MealsOverviewStackNavigatorParamsList>();

export default function MealsOverviewStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MealsOverview"
        component={MealsOverviewScreen}
        options={{ title: "Meals Overview" }}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{ title: "Meal Details" }}
      />
    </Stack.Navigator>
  );
}
