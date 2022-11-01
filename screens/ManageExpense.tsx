import { useLayoutEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigator/RootStackNavigator";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { AppState, useAppDispatch } from "../store/store";
import { addExpense, deleteExpense, updateExpense } from "../store/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { useSelector } from "react-redux";

interface ManageExpenseProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "ManageExpense">;
  route: RouteProp<RootStackParamList, "ManageExpense">;
}

function ManageExpense({ navigation, route }: ManageExpenseProps) {
  const { expenseId } = route.params || {};

  const dispatch = useAppDispatch();
  const expenses = useSelector((state: AppState) => state.expenses.expenses);
  const currentExpense = expenses.find((expense) => expense.id === expenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: !!expenseId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, expenseId]);

  function deleteExpenseHandler() {
    if (expenseId) {
      dispatch(deleteExpense({ id: expenseId }));
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function submitHandler(expense: any) {
    if (expenseId) {
      dispatch(updateExpense({ id: expenseId, expense }));
    } else {
      dispatch(addExpense({ expense }));
    }
    navigation.goBack();
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
