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
  expenses: [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19"),
    },
    {
      id: "e2",
      description: "A pair of trousers",
      amount: 89.29,
      date: new Date("2022-01-05"),
    },
    {
      id: "e3",
      description: "Some bananas",
      amount: 5.99,
      date: new Date("2021-12-01"),
    },
    {
      id: "e4",
      description: "A book",
      amount: 14.99,
      date: new Date("2022-02-19"),
    },
    {
      id: "e5",
      description: "Another book",
      amount: 18.59,
      date: new Date("2022-02-18"),
    },
  ],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (
      state,
      action: PayloadAction<{ expense: ExpensePayloadType }>
    ) => {
      const id = new Date().toString() + Math.random().toString();
      state.expenses.unshift({ ...action.payload.expense, id });
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

export const { addExpense, updateExpense, deleteExpense } =
  expensesSlice.actions;

export default expensesSlice.reducer;
