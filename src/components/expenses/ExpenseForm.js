import { useState } from 'react';
import '../../assets/styles/expenses/ExpenseForm.css';

const ExpenseForm = (props) => {
  const defaultData = {title: '', amount: '', date: ''};

  const [data, setData] = useState(defaultData);
  
  const inputChangeHandler = (identifier, value) => {
    setData((oldData) => {return {...oldData, [identifier]: value}});
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    data['amount'] = +data['amount'];
    props.onExpenseDataSave(data);
    setData(defaultData);
  }

  return <form onSubmit={handleSubmission}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} value={data.title}/>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type="number" value={data.amount} min={0.01} step={0.01}
                onChange={(event) => inputChangeHandler('amount', event.target.value)}
                />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type="date" value={data.date} min="2019-01-01" max="2023-12-31"
              onChange={(event) => inputChangeHandler('date', event.target.value)}/>
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='button' onClick={props.onCancel}>Cancel</button>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm;