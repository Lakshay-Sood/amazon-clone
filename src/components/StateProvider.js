import React, { createContext, useContext, useReducer } from 'react';

// this is a data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is used to use the data inside components
// it returns [state, dispatch]
export const useStateValue = () => useContext(StateContext);
