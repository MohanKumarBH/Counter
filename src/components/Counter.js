import React, { useState, useEffect } from "react";

const Counter = (props) => {


  return (
    <div className="counterContainer">
      <button className="leftButton" onClick={props.decrement}>
        -
      </button>
      <input className="input" value={props.count} type="number" onChange={props.handelCountValueChange} />
      <button className="rightButton" onClick={props.incerement}>
        +
      </button>
    </div>
  );
};

export default Counter;
