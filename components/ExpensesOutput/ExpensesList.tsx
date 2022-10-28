import { FlatList, Text } from "react-native";
import { Expense } from "../../models/Expense";
import ExpenseListItem from "./ExpenseListItem";

interface ExpensesListProps {
  expenses: Expense[];
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item }) => <ExpenseListItem expense={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
