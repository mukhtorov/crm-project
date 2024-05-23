import { useLocation } from "react-router-dom";
import Title from "../Title";
import { Arrow, Container } from "./style";
import Subtitle from "../Subtitle";

export const Breadcrumb = () => {
  const location = useLocation();
  console.log(location, "loc");
  return location.pathname !== "/analitika" ? (
    <Container title={location.state?.parent}>
      <Title>{location.state?.parent}</Title>
      {location.state?.child && <Arrow />}
      <Subtitle>{location.state?.child}</Subtitle>
    </Container>
  ) : null;
};
