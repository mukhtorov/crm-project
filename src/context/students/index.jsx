/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const StudentsContext = createContext();

export const StudentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StudentsContext.Provider value={[state, dispatch]}>
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsProvider;
