import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from "../../screens/ManageExpense";
import ExpensesOverview from "./ExpensesOverviewNavigator";

export type RootStackParamList = {
  ManageExpense: undefined;
  ExpensesOverview: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExpensesOverview"
        component={ExpensesOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ManageExpense" component={ManageExpense} />
    </Stack.Navigator>
  );
}
