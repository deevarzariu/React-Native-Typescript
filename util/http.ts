import axios from "axios";

const HTTP_URL =
  "https://react-native-typescript-bdcca-default-rtdb.firebaseio.com";

export async function getExpenses() {
  const response = await axios.get(`${HTTP_URL}/expenses.json`);
  const expenses = Object.keys(response.data).map((key) => ({
    id: key,
    ...response.data[key],
    date: new Date(response.data[key].date),
  }));
  return expenses;
}

export async function addExpense(expense: any) {
  const response = await axios.post(`${HTTP_URL}/expenses.json`, expense);
  return response.data.name;
}

export function updateExpense(id: string, expense: any) {
  return axios.put(`${HTTP_URL}/expenses/${id}.json`, expense);
}

export function deleteExpense(id: string) {
  return axios.delete(`${HTTP_URL}/expenses/${id}.json`);
}
