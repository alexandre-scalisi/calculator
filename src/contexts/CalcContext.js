import React, { useState, createContext } from "react";

export const CalcContext = createContext();

export const CalcProvider = (props) => {
  const [actionState, setActionState] = useState(
    process.env.REACT_APP_ACTION_STATE
  );
  const [operatorState, setOperatorState] = useState(
    process.env.REACT_APP_OPERATOR_STATE
  );
  const [lowerScreenState, setLowerScreenState] = useState(
    process.env.REACT_APP_LOWER_SCREEN_STATE
  );
  const [upperScreenState, setUpperScreenState] = useState(
    process.env.REACT_APP_UPPER_SCREEN_STATE
  );

  return (
    <CalcContext.Provider
      value={{
        actionState,
        setActionState,
        operatorState,
        setOperatorState,
        lowerScreenState,
        setLowerScreenState,
        upperScreenState,
        setUpperScreenState
      }}
    >
      {props.children}
    </CalcContext.Provider>
  );
};

