import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesStackNavigator from "./CategoriesStackNavigator";
import MealsOverviewStackNavigator from "./MealsOverviewStackNavigator";

const Stack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={CategoriesStackNavigator}
        name="CategoriesStack"
      />
      <Stack.Screen
        component={MealsOverviewStackNavigator}
        name="MealsOverviewStack"
      />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
