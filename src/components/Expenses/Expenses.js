<<<<<<< HEAD
=======
import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
>>>>>>> 8bea4961b7a279cf5cc936c3609bb4ee94ed0a5e

import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
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

<<<<<<< HEAD
export default Expenses;
=======
export default Expenses
>>>>>>> 8bea4961b7a279cf5cc936c3609bb4ee94ed0a5e
