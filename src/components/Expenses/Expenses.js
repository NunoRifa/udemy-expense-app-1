import React, { useState } from "react";

import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

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
      <ExpenseList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
