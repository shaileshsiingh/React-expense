import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
import React from 'react'

const ExpenseItem = (props) => {
 
  // const[price,setPrice] = useState(props.amount)
  // const updateHandler = ()=>{
  //   setPrice('100')
  // }
// const deleteHandler = () =>{
//  const expenseItem = document.querySelector('.expense-item');
//     expenseItem.remove();
// }

  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
    <div className='expense-item__description'>
    <ExpenseDetails amount= {props.amount}   title={props.title} />
    {/* <button className='delete' onClick={updateHandler}>Change Price</button> */}
    </div>
    </Card>
    
  )
}

export default ExpenseItem
