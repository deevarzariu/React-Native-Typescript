import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from "../../constants/styles";
import ManageExpense from "../../screens/ManageExpense";
import ExpensesOverview from "./ExpensesOverviewNavigator";

export type RootStackParamList = {
  ManageExpense: { expenseId: string | undefined };
  ExpensesOverview: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="ExpensesOverview"
        component={ExpensesOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}
