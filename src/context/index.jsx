/* eslint-disable react/prop-types */
import UserContext from "./user";
import MentorContext from "./mentor";

const provider = [UserContext, MentorContext];

export const ContextProvider = ({ children }) => {
  return provider.reduceRight(
    (account, Provider) => <Provider>{account}</Provider>,
    children
  );
};

export default ContextProvider;
