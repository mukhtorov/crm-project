import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(37, 62, 95, 0.5);

  z-index: 999;
`;

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 78px;
  max-width: 900px;
  min-width: 200px;
  width: fit-content;
  background-color: white;

  padding: 32px 48px 32px 48px;
  gap: 16px;
  border-radius: 8px;
  max-height: 90%;

  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
`;
