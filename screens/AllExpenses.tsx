import { useSelector } from "react-redux";
import { AppState } from "../store/store";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
  const expenses = useSelector((state: AppState) => state.expenses.expenses);

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found."
    />
  );
}

export default AllExpenses;
