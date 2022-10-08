import React from "react";

import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { id: "bu1", label: "Jan", value: 0 },
    { id: "bu2", label: "Feb", value: 0 },
    { id: "bu3", label: "Mar", value: 0 },
    { id: "bu4", label: "Apr", value: 0 },
    { id: "bu5", label: "Mey", value: 0 },
    { id: "bu6", label: "Jun", value: 0 },
    { id: "bu7", label: "Jul", value: 0 },
    { id: "bu8", label: "Ags", value: 0 },
    { id: "bu9", label: "Sep", value: 0 },
    { id: "bu10", label: "Oct", value: 0 },
    { id: "bu11", label: "Nov", value: 0 },
    { id: "bu12", label: "Des", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // String at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
