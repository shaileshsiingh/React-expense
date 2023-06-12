import React from 'react'
import './ExpenseItem.css'

function ExpenseItem() {
const expenseDate = new Date(2021,2,28)
const expenseTitle = 'Car Insurance'
const expenseAmount = 298
const locationOfExpenditure = 'Mumbai'

  return (
    <div>
    <div className='expense-item'>
      {expenseDate.toDateString()}
    </div>
    <div className='expense-item__description'>
      <h2>{expenseTitle}</h2>
      <div className='expense-item__price'>{expenseAmount}</div>
      <div className='expense-item__price'>{locationOfExpenditure}</div>
    </div>
    </div>
    
  )
}

export default ExpenseItem