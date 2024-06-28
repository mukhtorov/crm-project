/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import Title from "../Title";
import { Arrow, Container } from "./style";
import Subtitle from "../Subtitle";

export const Breadcrumb = (props) => {
  const location = useLocation();
  console.log(location, "loc");
  return location.pathname !== "/analitika" ? (
    <Container title={location.state?.parent}>
      <Title>{location.state?.parent}</Title>
      {location.state?.child && <Arrow />}
      <Subtitle>{location.state?.child}</Subtitle>
      <div style={{ display: "flex", marginLeft: "auto", gap: 16 }}>
        {props.children}
      </div>
    </Container>
  ) : null;
};
