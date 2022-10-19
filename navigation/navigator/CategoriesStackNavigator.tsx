import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../../screens/CategoryScreen";
import MealsOverviewScreen from "../../screens/MealsOverviewScreen";

export type CategoriesStackNavigatorParamsList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
};

const Stack = createNativeStackNavigator<CategoriesStackNavigatorParamsList>();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        title: "Categories",
      }}
    />
    <Stack.Screen
      name="MealsOverview"
      component={MealsOverviewScreen}
      options={{
        title: "Meals Overview",
      }}
    />
  </Stack.Navigator>
);
