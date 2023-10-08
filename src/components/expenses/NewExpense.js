import { useState } from 'react';
// import '../../assets/styles/expenses/NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {styled} from 'styled-components';

const NewExpanseDiv = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  & button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
  }

  & button:hover, & button:active {
    background-color: #510674;
    border-color: #510674;
  }

  & button.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;
  }
  & button.alternative:hover,
  & button.alternative:active {
    background-color: #ddb3f8;
  }
`;

const NewExpanse = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (expense) => {
    if(expense.date) expense.date = new Date(expense.date);
    
    props.onExpenseDataSave(expense);
    stopEditing();
  }

  const startEditing = ()=> setIsEditing(true)
  const stopEditing = ()=> setIsEditing(false)

  return <NewExpanseDiv className='new-expense'>
    {!isEditing && <button onClick={startEditing}>Add New Expense.</button>}
    { isEditing && <ExpenseForm onCancel={stopEditing} onExpenseDataSave={saveExpenseData}/>}
  </NewExpanseDiv>
}

export default NewExpanse;