import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  border-radius: 8px;
  &:hover {
    background: #f0f5ff;
  }
`;
export const Section = styled.div`
  display: flex;
  flex: 1;
  /* border: 1px solid red; */
  justify-content: ${({ end }) => end && " flex-end"};
  align-items: center;
  padding: 12px;
  background: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

Info.Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 24px;
  border-radius: 50%;
`;

Info.SMS = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--primaryColor);
`;
