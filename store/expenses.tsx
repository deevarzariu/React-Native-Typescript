import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "../models/Expense";

export type ExpensePayloadType = {
  description: string;
  amount: number;
  date: Date;
};

export type ExpensesReducerStateType = {
  expenses: Expense[];
};

const initialState: ExpensesReducerStateType = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setExpenses: (state, action) => {
      state.expenses = action.payload.reverse();
    },
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.unshift(action.payload);
    },
    deleteExpense: (state, action: PayloadAction<{ id: string }>) => {
      state.expenses.splice(
        state.expenses.findIndex((expense) => expense.id === action.payload.id),
        1
      );
    },
    updateExpense: (
      state,
      action: PayloadAction<{ id: string; expense: ExpensePayloadType }>
    ) => {
      const index = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const expense = state.expenses[index];
      state.expenses[index] = {
        ...expense,
        ...action.payload.expense,
      };
    },
  },
});

export const { setExpenses, addExpense, updateExpense, deleteExpense } =
  expensesSlice.actions;

export default expensesSlice.reducer;
