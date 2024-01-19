import React, { useState } from "react";
import "./UseState.css";
const UseState = () => {
  const [number, setNumber] = useState(0);

  const handleInc = () => {
    setNumber(number + 1);
  };
  const handleDec = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <div className="container">
        <h1>1.UseState Hook</h1>
        <h3>Hello world its {number}</h3>
        <div className="counter">
          <button onClick={handleDec}>-</button>
          <p>{number}</p>
          <button onClick={handleInc}>+</button>
        </div>
      </div>
    </>
  );
};

export default UseState;
