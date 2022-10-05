import React, { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const setFilterValue = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expenseFiltered) => {
    return expenseFiltered.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSetFilter={setFilterValue} />
      {filteredExpense.length === 0 ? (
        <p>No Expenses found.</p>
      ) : (
        filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
