import React, { useState, createContext } from 'react';

export const ScreenContext = createContext()

export const ScreenProvider = props => {
    const [resultScreenState, setResultScreenState] = useState('0')
    const [operationScreenState, setOperationScreenState] = useState('')
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
