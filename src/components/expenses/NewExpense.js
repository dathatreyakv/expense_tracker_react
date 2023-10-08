import { useState } from 'react';
import '../../assets/styles/expenses/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpanse = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (expense) => {
    if(expense.date) expense.date = new Date(expense.date);
    
    props.onExpenseDataSave(expense);
    stopEditing();
  }

  const startEditing = ()=> setIsEditing(true)
  const stopEditing = ()=> setIsEditing(false)

  return <div className='new-expense'>
    {!isEditing && <button onClick={startEditing}>Add New Expense.</button>}
    { isEditing && <ExpenseForm onCancel={stopEditing} onExpenseDataSave={saveExpenseData}/>}
  </div>
}

export default NewExpanse;