/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GroupsContext.Provider value={[state, dispatch]}>
      {children}
    </GroupsContext.Provider>
  );
};

export default GroupsProvider;
