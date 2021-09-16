import React, { useState, createContext } from "react";

export const OperatorContext = createContext();

export const OperatorProvider = (props) => {
  const [operatorState, setOperatorState] = useState("");

  return (
    <OperatorContext.Provider value={{ operatorState, setOperatorState }}>
      {props.children}
    </OperatorContext.Provider>
  );
};
