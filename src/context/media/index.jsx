/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MediaContext.Provider value={[state, dispatch]}>
      {children}
    </MediaContext.Provider>
  );
};

export default MediaProvider;
