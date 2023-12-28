import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredtitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (title) => {
    setUserInput({
      ...userInput,
      enteredtitle: title.target.value,
    });
  };

  const amountChangeHandler = (amount) => {
    setUserInput({
      ...userInput,
      enteredAmount: amount.target.value,
    });
  };

  const dateChangeHandler = (date) => {
    setUserInput({
      ...userInput,
      enteredDate: date.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredtitle,
      amount: userInput.enteredAmount,
      location: userInput.enteredDate,
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;

// const [enteredtitle, setEnteredTitle] = useState("");
// const [enteredAmount, setEnteredAmount] = useState("");
// const [enteredDate, setEnteredDate] = useState("");
// const [userInput, setUserInput] = useState({
//   enteredtitle: "",
//   enteredAmount: "",
//   enteredDate: "",
// });
// const titleChangeHandler = (title) => {
//   setUserInput((prevState) => {
//     return { ...prevState, prevState: title.target.value };
//   });
// };

// const amountChangeHandler = (amount) => {
//   setUserInput((prevState) => {
//     return { ...prevState, prevState: amount.target.value };
//   });
// };

// const dateChangeHandler = (date) => {
//   setUserInput((prevState) => {
//     return { ...prevState, prevState: date.target.value };
//   });
// };
