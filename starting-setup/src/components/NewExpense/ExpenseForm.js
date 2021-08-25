import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // create state instances - multiple state
  //   const [enteredTitle, setEnteredTitle] = useState();
  //   const [enteredAmount, setEnteredAmount] = useState();
  //   const [enteredDate, setEnteredDate] = useState();

  // create state instances - single state
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // on change we need to handle - multiple state
  //   const titleChangeHandler = (event) => {
  //     setEnteredTitle(event.target.value);
  //   };

  //   const amountChangeHandler = (event) => {
  //     setEnteredAmount(event.target.value);
  //   };

  //   const dateChangeHandler = (event) => {
  //     setEnteredDate(event.target.value);
  //   };

  // on change we need to handle - single state
  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
