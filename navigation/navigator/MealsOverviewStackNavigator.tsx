import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "../../screens/MealsOverviewScreen";

export type MealsOverviewStackNavigatorParamsList = {
  MealsOverview: { categoryId: string };
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
    </Stack.Navigator>
  );
}
