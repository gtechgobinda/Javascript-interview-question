import React, { useContext } from "react";
import { MyContext } from "./context.jsx";

const ComponentC = () => {
  const { user, setUser } = useContext(MyContext);
  return (
    <>
      <div>ComponentC</div>
      <div>{user}</div>
    </>
  );
};

export default ComponentC;
