import { useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "../store/store";
import { getExpenses } from "../util/http";
import { setExpenses } from "../store/expenses";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchExpenses() {
      setIsLoading(true);
      try {
        const expenses = await getExpenses();
        dispatch(setExpenses(expenses));
      } catch (error: any) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchExpenses();
  }, []);

  const expenses = useSelector((state: AppState) => state.expenses.expenses);
  const recentExpenses = expenses.filter(
    (expense) => expense.date > getDateMinusDays(new Date(), 7)
  );

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (error) {
    return <ErrorOverlay message={error} onConfirm={confirmError} />;
  }

  function confirmError() {
    setError(null);
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
