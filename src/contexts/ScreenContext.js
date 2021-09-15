import React, { useState, createContext } from 'react';

export const ScreenContext = createContext()

export const ScreenProvider = (props) => {
    const [screenState, setScreenState] = useState('0')
    return (
        <ScreenContext.Provider value={{screenState, setScreenState}}>
            {props.children}
        </ScreenContext.Provider>
    )
}
