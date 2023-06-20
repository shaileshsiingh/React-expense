import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
const [enteredTitle, setEnteredTitle] = useState('')
const [enteredAmount, setEnteredAmount] = useState('')
const [enteredDate, setEnteredDate] = useState('')
// const [userInput, setUserInput] = useState({
//   enteredTitle : '',
//   enteredAmount : '',
//   eneterdDate :'',
// })

const titleHandler = (event) =>{
  setEnteredTitle(event.target.value)
  // setUserInput({
  //   ...userInput,
  //   enteredTitle:event.target.value
  // })
}

const amountHandler = (event) =>{
  setEnteredAmount(event.target.value)
  // setUserInput({
  //   ...userInput,
  //   enteredAmount:event.target.value
  // })
}

const dateHandler = (event) =>{
  setEnteredDate(event.target.value)
  // setUserInput({
  //   ...userInput,
  //   enteredDate:event.target.value
  // })
}

  const submitHandler = (event) =>{
event.preventDefault()
  const ExpData = {
   title : enteredTitle,
   amount : enteredAmount,
   date : new Date(enteredDate)
  }

props.onSaveExpenseData(ExpData)
setEnteredTitle('')
setEnteredAmount('')
setEnteredDate('')

  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input onChange={titleHandler} type='text' value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input onChange={amountHandler} type='number' min='0.01' step='0.01' value={enteredAmount} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input onChange={dateHandler} type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
  }

export default ExpenseForm;