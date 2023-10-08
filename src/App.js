import NewExpanse from "./components/expenses/NewExpense";
import Expenses from "./components/expenses/Expenses";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: "1", title: "Car Insurance", amount: 94.12, date: new Date('2023-11-10')},
  { id: "2", title: "Home Loan", amount: 297.12, date: new Date('2023-10-01')},
  { id: "3", title: "Health Insurace", amount: 120.0, date: new Date('2023-05-10')},
  { id: "4", title: "MF", amount: 110, date: new Date('2021-01-10')},
  { id: "5", title: "Trade", amount: 400, date: new Date('2022-02-15')},
  { id: "6", title: "HomeLoan", amount: 200, date: new Date('2022-10-07')}
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    expense.id = Math.max(...expenses.map((o)=> Number(o['id']))) + 1;
    setExpenses((old_expenses) => [expense, ...old_expenses]);
  }
  return (
    <div>
      <NewExpanse onExpenseDataSave={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
      <div className="my-box">
        <p>Some Text</p>
      </div>
    </div>
  );
}

export default App;
