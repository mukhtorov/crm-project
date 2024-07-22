import styled from "styled-components";
import arrow from "../../../assets/icons/rightArrow.svg?react";

const getColor = ({ title }) => {
  switch (title) {
    case "Lidlar":
      return "#F0F5FF";
    case "Moliya":
      return "#FFF2E8";
    case "Talabalar":
      return "#F9F0FF";
    case "Guruhlar":
      return "#FCFFE6";
    case "Kurslar":
      return "#E6FFFB";
    case "HR":
      return "#FFF0F6";
    case "Sozlamalar":
      return "#FFF2E8";
    default:
      return "#FFF2E8";
  }
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px 8px 0px 0px;
  padding: 24px;
  background-color: ${getColor};
  margin-bottom: 32px;
`;

export const Arrow = styled(arrow)`
  display: flex;
`;
