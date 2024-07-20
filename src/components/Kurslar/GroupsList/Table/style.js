import styled from "styled-components";
import edit from "../../../../assets/icons/edit.svg?react";
import del from "../../../../assets/icons/delete.svg?react";

export const Edit = styled(edit)`
  padding: 4px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const Delete = styled(del)`
  padding: 4px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const Title = styled.div`
  display: flex;
  justify-content: ${({ center }) => center && "center"};
  font-family: Montserrat;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
  color: ${({ color }) => (color ? color : "#253e5f")};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
`;

export const Status = styled.div`
  color: ${({ active }) => (active ? "#52C41A" : "#FAAD14")};
  font-family: Montserrat;
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  font-weight: 600;
  line-height: 20px;

  &::before {
    display: inline-block;
    content: " ";
    width: 8px;
    height: 8px;
    background-color: ${({ active }) => (active ? "#52C41A" : "#FAAD14")};
    border-radius: 50%;
    margin-right: 8px;
  }
`;

export const TimelineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ time }) => (time ? "#91D5FF" : "#1890FF")};

  /* width: Fixed (250px) px; */
  height: 28px;
  padding: 6px 12px;
  gap: 8px;
  border-radius: 16px;

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: white;

  width: 100%;
  max-width: 300px;
`;
