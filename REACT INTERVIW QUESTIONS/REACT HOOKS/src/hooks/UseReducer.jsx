import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>4.useReducer() Hook</h1>
        <div>Count- <b>{count}</b></div>
        <button onClick={()=>dispatch('increment')}>+</button>
        <button onClick={()=>dispatch('decrement')}>-</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
      </div>
    </>
  );
};

export default UseReducer;
