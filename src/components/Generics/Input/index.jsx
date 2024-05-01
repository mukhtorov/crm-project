/* eslint-disable react/prop-types */
import { Container, Input } from "./style";

export const GenericInput = (props) => {
  const { iconLeft, iconRight } = props;
  console.log(props, "prop");
  return (
    <Container {...props}>
      {iconLeft && iconLeft}
      <Input {...props} />
      {iconRight && iconRight}
    </Container>
  );
};

export default GenericInput;
