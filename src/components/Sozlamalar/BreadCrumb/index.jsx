/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import Title from "../../Generics/Title";
import { Arrow, Container } from "./style";
import Subtitle from "../../Generics/Subtitle";

export const Breadcrumb = ({ children }) => {
  const location = useLocation();
  return (
    <Container>
      {location.state?.parent?.map((value) => {
        return (
          <Title key={value}>
            {value} <Arrow />
          </Title>
        );
      })}
      <Subtitle>{location.state?.child}</Subtitle>
      <div style={{ display: "flex", marginLeft: "auto" }}>{children}</div>
    </Container>
  );
};
