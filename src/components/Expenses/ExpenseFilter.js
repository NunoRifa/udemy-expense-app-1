import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const [selectedValue, setSelectedValue] = useState("");

  const valueChangeHandler = (e) => {
    setSelectedValue(e.target.value);
  };

  const data = { filter: selectedValue };
  props.onSetFilter(data);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedValue} onChange={valueChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
