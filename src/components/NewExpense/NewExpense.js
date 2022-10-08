import React, { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [expandCollapse, setExpandCollapse] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDatas = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseDatas);
    setExpandCollapse(false);
  };

  const addNewExpenseHandler = () => {
    setExpandCollapse(true);
  };

  const closeNewExpenseHandler = () => {
    setExpandCollapse(false);
  };

  return (
    <div className="new-expense">
      {!expandCollapse && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {expandCollapse && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseForm={closeNewExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
