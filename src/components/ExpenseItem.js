import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from './Card'

function ExpenseItem(props) {
// const locationOfExpenditure = 'Mumbai
  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date} />
    <div className='expense-item__description'>
    <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
    </div>
    </Card>
    
  )
}

export default ExpenseItem