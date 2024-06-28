import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  function handleInput() {
    console.log("function called");
    inputRef.current.value="1000"
    inputRef.current.focus();
    inputRef.current.style.color="red"
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Handle Input</button>
    </>
  );
};

export default UseRef;
