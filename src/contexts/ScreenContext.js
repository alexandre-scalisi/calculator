import React, { useState, createContext } from 'react';

export const ScreenContext = createContext()

export const ScreenProvider = props => {
    const [resultScreenState, setResultScreenState] = useState(
      process.env.REACT_APP_RESULT_SCREEN_STATE
    );
    const [operationScreenState, setOperationScreenState] = useState(
      process.env.REACT_APP_OPERATION_SCREEN_STATE
    );
    return (
      <ScreenContext.Provider
        value={{
          resultScreenState,
          setResultScreenState,
          operationScreenState,
          setOperationScreenState
        }}
      >
        {props.children}
      </ScreenContext.Provider>
    );
}
