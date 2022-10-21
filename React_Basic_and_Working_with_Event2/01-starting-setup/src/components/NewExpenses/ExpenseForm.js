import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  
  const [enteredTitle,setEnteredTitle]=useState('');
  const [enteredAmount,setEnteredAmount]=useState('');
  const [enteredDate,setEnteredDate]=useState('');

  // const [userInput,setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // })

  const titleChangeHandler=(event)=>{
// Approach:1     Approach1>Approach3>Approach3

    setEnteredTitle(event.target.value)

// Approach:2

    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // })

// Approach:3
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle:event.target.value}
    //  });
  }

  
  const amountChangeHandler=(event)=>{
    setEnteredAmount(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value
    // })
    
  } 

  
  const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value
    // })
  }

const submitHandler=(event)=>{
  event.preventDefault();

  const expenseData={
    title:enteredTitle,
    amount:enteredAmount,
    date:enteredDate
  }

  props.onSaveExpenseData(expenseData);

  
  setEnteredTitle('');
  setEnteredAmount('');
  setEnteredDate('');
}


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input type="text"  onChange={titleChangeHandler} id='title' name="title" value={enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label for='amount'>Amount</label>
          <input type="number" id='amount' name='amount' min="0.01" step="0.01"  onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label for='date'>Date</label>
          <input type="date"  id='date' name='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}  value={enteredDate}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="'submit">Add Expense</button>
      </div>
    </form>
  );
};


export default ExpenseForm; 