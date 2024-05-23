import styled from "styled-components";
import getValue from "../../../hooks/getStyleValue";

const Container = styled.div`
  display: flex;
  align-items: inherit;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 24px;
  /* color: var(--primaryColor); */
  font-size: ${({ size }) => (size ? getValue(size) : "16px")};
  color: ${({ color }) => (color ? color : "var(--primaryColor)")};
  margin-top: ${({ mt }) => getValue(mt)};
  margin-bottom: ${({ mb }) => getValue(mb)};
  margin-right: ${({ mr }) => getValue(mr)};
  margin-left: ${({ ml }) => getValue(ml)};
  padding-top: ${({ pt }) => getValue(pt)};
  padding-bottom: ${({ pb }) => getValue(pb)};
  padding-right: ${({ br }) => getValue(br)};
  padding-left: ${({ bl }) => getValue(bl)};
`;

const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  width: 28px;
  height: 28px;
  background: #1890ff;
  border-radius: 50%;
  color: white;
  margin-left: 8px;
`;

export { Container, Counter };
