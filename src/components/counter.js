import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 3);
  };

  const decrement = () => {
    setCount(count - 3);
  };

  return (
    <div className="app">
      <h1>Counter</h1>
      <div className="counter">
        <button onClick={increament} className="left">
          +
        </button>
        <div style={{ fontSize: "5rem" }}>{count}</div>
        <button onClick={decrement} className="right">
          {" "}
          -{" "}
        </button>
      </div>
    </div>
  );
}

export default Counter;
