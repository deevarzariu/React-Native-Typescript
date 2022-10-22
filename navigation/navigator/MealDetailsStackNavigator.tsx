import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailsScreen from "../../screens/MealDetailsScreen";

export type MealDetailsStackNavigatorParamsList = {
  MealDetails: { mealId: string };
};

const Stack = createNativeStackNavigator<MealDetailsStackNavigatorParamsList>();

export default function MealDetailsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={{ title: "Meal Details" }}
      />
    </Stack.Navigator>
  );
}
