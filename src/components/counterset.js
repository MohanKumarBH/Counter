import React, { useState } from "react";

const SetCounter = (props) => {
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(1000);

  const handleSetValue = () => {
    props.setValues(minValue, maxValue);
  };

  const handleValueChange = (evt) => {
    if (evt.target.name === "minValue") {
      setMinValue(Number(evt.target.value));
    } else {
      setMaxValue(Number(evt.target.value));
    }
  };
  return (
    <div className="counter">
      <h3>Set the counter Values</h3>
      <input
        type="number"
        name="minValue"
        placeholder="Enter Min Value"
        value={minValue}
        onChange={handleValueChange}
        className="form-input"
      />
      <input
        type="number"
        name="maxValue"
        style={{ marginLeft: 5 }}
        placeholder="Enter Max Value"
        value={maxValue}
        onChange={handleValueChange}
        className="form-input"
      />
      <button style={{ marginLeft: 5 }} onClick={handleSetValue} className="resetButton">
        Set Values
      </button>
    </div>
  );
};

export default SetCounter;
