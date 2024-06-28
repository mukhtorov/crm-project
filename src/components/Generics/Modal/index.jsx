/* eslint-disable react/prop-types */
import { Container, Wrapper } from "./style";
import { createPortal } from "react-dom";

export const Modal = (props) => {
  return props?.open
    ? createPortal(
        <Container>
          <Wrapper>{props?.children}</Wrapper>
        </Container>,
        document.body
      )
    : null;
};
