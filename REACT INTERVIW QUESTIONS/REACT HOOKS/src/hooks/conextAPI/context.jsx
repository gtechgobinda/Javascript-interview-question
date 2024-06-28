import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [user, setUser] = useState("Gobinda Saha");
  return (
    <>
      <MyContext.Provider value={{ user, setUser }}>
        {children}
      </MyContext.Provider>
    </>
  );
};
