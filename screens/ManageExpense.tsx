import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigator/RootStackNavigator";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { useAppDispatch } from "../store/store";
import { addExpense, deleteExpense, updateExpense } from "../store/expenses";
import { Expense } from "../models/Expense";

interface ManageExpenseProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "ManageExpense">;
  route: RouteProp<RootStackParamList, "ManageExpense">;
}

function ManageExpense({ navigation, route }: ManageExpenseProps) {
  const { expenseId } = route.params || {};

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: !!expenseId ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, expenseId]);

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    const DUMMY_EXPENSE = {
      description: "Test",
      amount: 19.99,
      date: new Date(),
    };

    if (expenseId) {
      dispatch(
        updateExpense({
          id: expenseId,
          expense: DUMMY_EXPENSE,
        })
      );
    } else {
      dispatch(
        addExpense({
          expense: DUMMY_EXPENSE,
        })
      );
    }
    navigation.goBack();
  }

  function deleteExpenseHandler() {
    if (expenseId) {
      dispatch(deleteExpense({ id: expenseId }));
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {!!expenseId ? "Update" : "Add"}
        </Button>
      </View>
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
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
