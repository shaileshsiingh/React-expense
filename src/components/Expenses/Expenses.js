
import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseForm from './ExpenseForm';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseForm/>
      {props.items.map((item)=>(
        <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        location={item.location}
      />
      ))}
    </Card>
  );
}

export default Expenses;