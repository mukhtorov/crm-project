/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const MentorContext = createContext();

export const MentorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MentorContext.Provider value={[state, dispatch]}>
      {children}
    </MentorContext.Provider>
  );
};

export default MentorProvider;
