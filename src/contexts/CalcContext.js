import React, { useState, createContext } from "react";

export const CalcContext = createContext();

export const CalcProvider = (props) => {
  const [actionState, setActionState] = useState(
    process.env.REACT_APP_ACTION_STATE
  );
  const [operatorState, setOperatorState] = useState(
    process.env.REACT_APP_OPERATOR_STATE
  );
  const [resultScreenState, setResultScreenState] = useState(
    process.env.REACT_APP_RESULT_SCREEN_STATE
  );
  const [operationScreenState, setOperationScreenState] = useState(
    process.env.REACT_APP_OPERATION_SCREEN_STATE
  );

  return (
    <CalcContext.Provider
      value={{
        actionState,
        setActionState,
        operatorState,
        setOperatorState,
        resultScreenState,
        setResultScreenState,
        operationScreenState,
        setOperationScreenState
      }}
    >
      {props.children}
    </CalcContext.Provider>
  );
};

