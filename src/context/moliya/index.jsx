/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const MoliyaContext = createContext();

export const MoliyaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MoliyaContext.Provider value={[state, dispatch]}>
      {children}
    </MoliyaContext.Provider>
  );
};

export default MoliyaProvider;
