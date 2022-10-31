import { useSelector } from "react-redux";
import { AppState } from "../store/store";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expenses = useSelector((state: AppState) => state.expenses.expenses);
  const recentExpenses = expenses.filter(
    (expense) => expense.date > getDateMinusDays(new Date(), 7)
  );

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
