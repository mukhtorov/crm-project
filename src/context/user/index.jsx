/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const User = createContext();

export const UserContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <User.Provider value={[state, dispatch]}>{children}</User.Provider>;
};

export default UserContext;
