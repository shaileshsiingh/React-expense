import React from 'react'
import Card from '../UI/Card'

function ExpenseForm() {
const changeHandler = (event) =>{
    console.log(event.target.value)
}
    
  return (
    <Card>
    <form>
      <label>Expense Title:
        <input onChange={changeHandler} className='value'
          type="text" 
          
        />
      </label>
      <label>Amount:
        <input onChange={changeHandler} className='value' 
          type="number" 
          
        />
      </label>
      <label>Date:
        <input onChange={changeHandler} className='value'
          type="date" 
          
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
    </Card>
  )
}

export default ExpenseForm