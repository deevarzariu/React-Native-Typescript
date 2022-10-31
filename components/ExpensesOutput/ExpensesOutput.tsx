import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Expense } from "../../models/Expense";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

interface ExpensesOutputProps {
  expenses: Expense[];
  expensesPeriod: string;
  fallbackText?: string;
}

function ExpensesOutput({
  expenses,
  expensesPeriod,
  fallbackText,
}: ExpensesOutputProps) {
  let content = <Text style={styles.fallback}>{fallbackText}</Text>;

  if (expenses.length) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  fallback: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});

export default ExpensesOutput;
