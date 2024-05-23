/* eslint-disable react/prop-types */
import { Container } from "./style";

export const Title = (props) => {
  return <Container {...props}>{props?.children}</Container>;
};

export default Title;
