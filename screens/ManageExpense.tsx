import { useState, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigator/RootStackNavigator";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { AppState, useAppDispatch } from "../store/store";
import { deleteExpense, updateExpense, addExpense } from "../store/expenses";
import {
  addExpense as addExpenseHttp,
  deleteExpense as deleteExpenseHttp,
  updateExpense as updateExpenseHttp,
} from "../util/http";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { useSelector } from "react-redux";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

interface ManageExpenseProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "ManageExpense">;
  route: RouteProp<RootStackParamList, "ManageExpense">;
}

function ManageExpense({ navigation, route }: ManageExpenseProps) {
  const { expenseId } = route.params || {};
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();
  const expenses = useSelector((state: AppState) => state.expenses.expenses);
  const currentExpense = expenses.find((expense) => expense.id === expenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: !!expenseId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, expenseId]);

  async function deleteExpenseHandler() {
    setIsLoading(true);
    if (expenseId) {
      try {
        await deleteExpenseHttp(expenseId);
        dispatch(deleteExpense({ id: expenseId }));
        navigation.goBack();
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function submitHandler(expense: any) {
    setIsLoading(true);
    try {
      if (expenseId) {
        await updateExpenseHttp(expenseId, expense);
        dispatch(updateExpense({ id: expenseId, expense }));
      } else {
        const id = await addExpenseHttp(expense);
        dispatch(addExpense({ ...expense, id }));
      }
      navigation.goBack();
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  function confirmError() {
    setError(null);
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (error) {
    return <ErrorOverlay message={error} onConfirm={confirmError} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitBtnLabel={!!expenseId ? "Update" : "Add"}
        initExpense={currentExpense}
        onCancel={cancelHandler}
        onSubmit={submitHandler}
      />
      {!!expenseId && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpense;
