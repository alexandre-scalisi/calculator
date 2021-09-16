import React, {useState, createContext} from 'react';

export const ActionContext = createContext();

export const ActionProvider = props => {
  const [actionState, setActionState] = useState(process.env.REACT_APP_ACTION_STATE);

  return (
    <ActionContext.Provider value={{ actionState, setActionState }}>
      {props.children}
    </ActionContext.Provider>
  );

}