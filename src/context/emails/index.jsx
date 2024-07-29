/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const EmailsContext = createContext();

export const EmailsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EmailsContext.Provider value={[state, dispatch]}>
      {children}
    </EmailsContext.Provider>
  );
};

export default EmailsProvider;
