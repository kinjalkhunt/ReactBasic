import React from 'react'
import TotalExpense from './TotalExpence'
import ExpenseForm from './ExpenceForm'
import ExpenseList from './ExpenceList'

function mainIndex() {
  return (
    <div>
      <TotalExpense/>
      <ExpenseForm/>
      <ExpenseList/>
    </div>
  )
}

export default mainIndex
