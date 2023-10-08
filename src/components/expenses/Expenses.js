import { useState } from "react";
import "../../assets/styles/expenses/Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "../../assets/styles/expenses/ExpensesChart";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2023');
  const filerChangeHandler = (selectedYr) => {
    setFilterYear(selectedYr);
  }

  let filterInfoText = '2020, 2021 & 2022';
  if(filterYear === '2020')
    filterInfoText = '2021, 2022 & 2023';
  else if(filterYear === '2021')
    filterInfoText = '2020, 2022 & 2023';
  else if(filterYear === '2022')
    filterInfoText = '2020, 2021 & 2023';
  else if(filterYear === '2023')
    filterInfoText = '2020, 2021 & 2022';

  const filteredExpenses = props.expenses.filter(expense =>
     expense.date.getFullYear().toString() === filterYear)

  return <div>
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={filerChangeHandler} />
      <p style={{color: 'white'}}>Data For Years {filterInfoText} is hidden.</p>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  </div>
}