import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(37, 62, 95, 0.5);
  z-index: 999999;
`;

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 78px;
  max-width: 900px;
  min-width: 200px;
  width: fit-content;
  height: 300px;
  background-color: white;

  padding: 32px 48px 32px 48px;
  gap: 16px;
  border-radius: 8px;
`;
