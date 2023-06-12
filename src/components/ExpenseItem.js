import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {
// const locationOfExpenditure = 'Mumbai'

  return (
    <div>
    <div className='expense-item'>
      {props.date.toDateString()}
    </div>
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>{props.amount}</div>
      <div className='expense-item__price'>{props.location}</div>
    </div>
    </div>
    
  )
}

export default ExpenseItem