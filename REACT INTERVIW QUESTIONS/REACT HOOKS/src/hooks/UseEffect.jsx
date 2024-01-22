import React, { useEffect, useState } from "react";
import "./UseEffect.css"
const UseEffect = () => {
  const [number, setNumber] = useState(0);

  const handleInc = () => {
    setNumber(number + 1);
  };
  const handleDec = () => {
    setNumber(number - 1);
  };
  useEffect(() => {
    document.title = `Counter:${number}`;
  }, [number]);
  return (
    <>
      <div className="container">
        <h1>2.UseEffect Hook</h1>
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

export default UseEffect;
