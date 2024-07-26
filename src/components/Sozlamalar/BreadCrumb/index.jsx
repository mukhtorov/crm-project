/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import Title from "../../Generics/Title";
import { Arrow, Container } from "./style";
import Subtitle from "../../Generics/Subtitle";
import { useEffect, useState } from "react";

export const Breadcrumb = ({ children }) => {
  const [path, setPath] = useState([]);
  const location = useLocation();
  console.log(location, "lcopoooo");
  useEffect(() => {
    setPath(
      typeof location.state.parent === "string"
        ? location.state.parent.split(" ")
        : location.state.parent
    );
  }, []);

  return (
    <Container>
      {path.map((value) => {
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
