import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFill = "0%";

  console.log("Value :", props.value);
  console.log("Max Value :", props.maxValue);

  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + "%";
    console.log("Bar Fill :", barFill);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFill }} />
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
