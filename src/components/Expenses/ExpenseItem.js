import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
const deleteHandler = () =>{
 const expenseItem = document.querySelector('.expense-item');
    expenseItem.remove();
}

  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
    <div className='expense-item__description'>
    <ExpenseDetails amount= {props.amount}  location={props.location}   title={props.title} />
    <button className='delete' onClick={deleteHandler}>Delete</button>
    </div>
    </Card>
    
  )
}

export default ExpenseItem
