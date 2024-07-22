import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Status = styled.div`
  display: flex;
  padding: 4px 10px;
  border-radius: 16px;
  justify-content: ${({ align }) => `flex-${align}` || "flex-start"};
  /* background-color: #fff1f0; */
  color: ${({ bonus }) => (bonus ? "green" : "red")};

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;
