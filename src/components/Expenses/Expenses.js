import React, { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  let expensesContent = <p>No Expenses found.</p>;

  const [filteredYear, setFilteredYear] = useState("2020");
  const setFilterValue = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expenseFiltered) => {
    return expenseFiltered.date.getFullYear().toString() === filteredYear;
  });

  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSetFilter={setFilterValue} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
