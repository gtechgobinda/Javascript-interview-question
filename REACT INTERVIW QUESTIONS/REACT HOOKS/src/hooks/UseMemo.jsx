import React, { useMemo, useState } from "react";
import "./UseMemo.css";
const UseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(1);
  const counter1 = () => {
    setCounterOne(counterOne + 1);
  };
  const counter2 = () => {
    setCounterTwo(counterTwo * 5);
  };

  // function multiCount(){
  //   console.log("multicount");
  //   return counterOne*2
  // }

  const multiCountMemo = useMemo(function multiCount() {
    console.log("multicount");
    return counterOne * 2;
  },[counterOne]);
  return (
    <>
      <div className="container">
        <h1>3.UseMemo() Hook</h1>
        <div className="counter1">
          <button onClick={counter1}>
            COUNTER1 <span className="text-bold">({counterOne})</span>
          </button>
          <br />
          {/* <h2>multicount:{multiCount()}</h2> */}
          <h2>multicount:{multiCountMemo}</h2>
          <br />
          <button onClick={counter2}>
            COUNTER2 <span className="text-bold">({counterTwo})</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default UseMemo;
