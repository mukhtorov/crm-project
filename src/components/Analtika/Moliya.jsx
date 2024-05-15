import Subtitle from "../Generics/Subtitle";
import { Fragment, ArrowIcon, Wrapper } from "./moliyaStyle";

export const Moliya = () => {
  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon left />
        <Subtitle>May 13</Subtitle>
        <ArrowIcon />
      </Fragment>
    </Wrapper>
  );
};

export default Moliya;
