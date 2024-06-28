import React from "react";
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";
import UseReducer from "./hooks/UseReducer";
import { MyProvider } from "./hooks/conextAPI/context.jsx";
import ComponentA from "./hooks/conextAPI/ComponentA.jsx";
import UseRef from "./hooks/UseRef.jsx";

const App = () => {
  return (
    <>
      <MyProvider>
        {/* <UseState /> */}
        {/* <UseEffect/> */}
        {/* <UseMemo/> */}
        <UseReducer/>
        {/* <ComponentA/> */}
        {/* <UseRef /> */}
      </MyProvider>
    </>
  );
};

export default App;
