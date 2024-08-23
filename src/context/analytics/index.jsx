/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AnalyticsContext.Provider value={[state, dispatch]}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
