import React, { useMemo, useState } from "react";
import "./UseMemo.css";
const UseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const counter1 = () => {
    setCounterOne(counterOne + 1);
  };
  const counter2 = () => {
    setCounterTwo(counterTwo + 1);
  };
  //   const isEven=()=>{
  //     for(let i=0;i<200;i++){
  //         console.log(i)
  //     }
  //     return counterOne%2===0;
  //   }

  const isEven=useMemo(() => {
    for (let i = 0; i < 20000; i++) {
      console.log(i);
    }
    return counterOne % 2 === 0;
  },[counterOne]);
  return (
    <>
      <div className="container">
        <h1>3.UseMemo() Hook</h1>
        <div className="counter1">
          <button onClick={counter1}>
            COUNTER1 <span className="text-bold">({counterOne})</span>
          </button>
          {/* <span>{isEven()?'Even':'Odd'}</span> */}
          <span>{isEven?'Even':'Odd'}</span>
          <br />
          <br />
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
