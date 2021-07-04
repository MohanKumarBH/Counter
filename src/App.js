import React, { useState } from "react";
import "./App.css";

import SetCounter from "./components/SetCounterForm";
import Counter from "./components/Counter";

function App() {
  const [isSetFilter, setIsSetFilter] = useState(false);
  const [values, setValues] = useState({
    minValue: 1,
    maxValue: 1000,
    count: 1,
  });
  const [warning, setWarning] = useState({ message: "", warning: false });

  const setValuesHandler = (minValue, maxValue) => {
    setValues({
      ...values,
      minValue: minValue,
      maxValue: maxValue,
      count: minValue,
    });
    setIsSetFilter(true);
  };
  const incerement = () => {
    if (values.count === values.maxValue) {
      setWarning({ message: "Reached to maximum count.", warning: true });
    } else {
      if (warning.warning) {
        setWarning({ message: " ", warning: false });
      }
      setValues({ ...values, count: values.count + 1 });
    }
  };

  const decrement = (evt) => {
    if (values.count === values.minValue) {
      setWarning({ message: "Reached to minimum count. ", warning: true });
    } else {
      if (warning.warning) {
        setWarning({ message: " ", warning: false });
      }
      setValues({ ...values, count: values.count - 1 });
    }
  };

  const resetCounter = () => {
    setValues({ minValue: 1, maxValue: 1000, count: 1 });
    setWarning({ message: " ", warning: false });
  };

  const setCounter = (evt) => {
    if (
      Number(evt.target.value) >= values.minValue &&
      Number(evt.target.value) <= values.maxValue
    ) {
      if (warning.warning) {
        setWarning({ message: " ", warning: false });
      }
      setValues({
        ...values,
        count: Number(evt.target.value),
      });
    } else {
      setWarning({
        message: "Value must be less than max and greater than min ",
        warning: true,
      });
    }
  };

  return (
    <div className="app">
      {!isSetFilter ? (
        <SetCounter setValues={setValuesHandler} />
      ) : (
        <div className="counter">
          <h3>Increment or Decrement Counter</h3>
          <Counter
            count={values.count}
            incerement={incerement}
            decrement={decrement}
            handelCountValueChange={setCounter}
          />
          <button onClick={resetCounter} className="resetButton">
            Reset To Default
          </button>
          {warning.warning ? (
            <div className="warning">{warning.message}</div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
