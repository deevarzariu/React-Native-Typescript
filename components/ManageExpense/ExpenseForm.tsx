import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { ExpensePayloadType } from "../../store/expenses";
import { getFormattedDate } from "../../util/date";

import Button from "../UI/Button";
import Input from "./Input";

interface ExpenseFormProps {
  submitBtnLabel: string;
  onSubmit: (expense: any) => void;
  onCancel: () => void;
  initExpense?: ExpensePayloadType;
}

function ExpenseForm({
  submitBtnLabel,
  onSubmit,
  onCancel,
  initExpense,
}: ExpenseFormProps) {
  const [form, setForm] = useState({
    amount: initExpense?.amount.toString() || "",
    date: getFormattedDate(initExpense?.date || new Date()),
    description: initExpense?.description || "",
  });

  function inputChangeHandler(
    name: "amount" | "date" | "description",
    value: string
  ) {
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function confirmHandler() {
    const expense = {
      amount: +form.amount,
      date: new Date(form.date),
      description: form.description,
    };

    const amountIsValid = !isNaN(expense.amount) && expense.amount > 0;
    const dateIsValid = expense.date.toString() !== "Invalid Date";
    const descriptionIsValid = expense.description.trim().length > 0;

    if (!(amountIsValid && dateIsValid && descriptionIsValid)) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }

    onSubmit(expense);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          inputConfig={{
            keyboardType: "decimal-pad",
            value: form.amount,
            onChangeText: inputChangeHandler.bind(this, "amount"),
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          inputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: form.date,
            onChangeText: inputChangeHandler.bind(this, "date"),
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Description"
        inputConfig={{
          multiline: true,
          value: form.description,
          onChangeText: inputChangeHandler.bind(this, "description"),
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {submitBtnLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
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
});

export default ExpenseForm;
